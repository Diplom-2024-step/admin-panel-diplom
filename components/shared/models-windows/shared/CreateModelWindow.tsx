import { ModelDto } from '@/AppDtos/Shared/model-dto'
import { CrudService } from '@/service/shared/CrudService'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';
import React, { useEffect, useState } from 'react'
import GenerateCreateInputForCreateDtoScheme from './GeneratedInputs/GenerateCreateInputForCreateDtoScheme';
import { Button } from '@nextui-org/react';
import { ZodError } from 'zod';

const CreateModelWindow = <Service extends CrudService<ModelDto, object, ModelDto>>(
     {
            isOpen,
            onClose,
            service,
        }: {
            isOpen: boolean,
            onClose: () => void,
            service: Service,
        }
) => {

    const [initialForm, setInitialForm] = useState(service.createDtoSchema.parse({}));


  const [form, setForm] = useState({...initialForm});

   const clearState = () => {
        setForm({ ...initialForm });
    };

  const onChange = (e: any) => {
    const { name, value } = e.target;
    console.log(`name = ${name} value = ${value}`);
    console.log(form);
    setForm((prevState:any) => ({ ...prevState, [name]: value }));
  };


    const handleSubmit = async () => {
        try {
            await service.create(form);
            clearState();
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

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Create the model</ModalHeader>
                        <ModalBody>
                            {
                            <GenerateCreateInputForCreateDtoScheme
                            createScheme={service.createDtoSchema}
                            form={form}
                            onChange={onChange}
                            />
                            }


                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
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

export default CreateModelWindow