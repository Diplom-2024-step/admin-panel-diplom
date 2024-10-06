"use client"
import { ModelDto } from '@/AppDtos/Shared/model-dto'
import { CrudService } from '@/service/shared/CrudService'
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import React, { useState } from 'react'
import { ZodError } from 'zod';
import GenerateEditInputForUpdateDtoScheme from './GeneratedInputs/GenerateEditInputForUpdateDtoScheme';

const EditModelWindow = <
    TGetModelDto extends ModelDto,
    Service extends CrudService<TGetModelDto, object, ModelDto>>(
        {
            isOpen,
            onClose,
            model,
            service,
            setModel,
        }: {
            isOpen: boolean,
            onClose: () => void,
            model: TGetModelDto,
            service: Service,
            setModel: (model : TGetModelDto) => void;
        }) => {


    let [objectState
        ,
        setState
    ] = useState(model);


    const onChange = (e: any) => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const [initialState, setInitialState ] = useState({ ...model });

    const clearState = () => {
        setState({ ...initialState });
    };

    const handleSubmit = async () => {
        objectState.id = model.id;
        try {
            await service.update(objectState);
            setState({... objectState});
            setInitialState({...objectState});
            setModel(objectState);
            onClose();
        } catch (e) {
            if (e instanceof ZodError) {
                console.error(e.errors);
            }
            else
            {
                throw e;
            }

        }
    }


    const innerOnClose = () => {
        clearState();
        onClose();
    }
    return (
        <Modal isOpen={isOpen} onClose={innerOnClose}>
            <ModalContent>
                {(innerOnClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Update the model</ModalHeader>
                        <ModalBody>
                            {
                            <GenerateEditInputForUpdateDtoScheme
                            onChange={onChange}
                            updateObject={objectState}
                            updateScheme={service.updateDtoSchema}

                            />
                            }


                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={innerOnClose}>
                                Close
                            </Button>
                            <Button color="primary" onPress={handleSubmit}>
                                submit
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default EditModelWindow