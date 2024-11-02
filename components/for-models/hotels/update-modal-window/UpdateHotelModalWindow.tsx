import { ModelDto } from '@/AppDtos/Shared/model-dto';
import ImageInput from '@/components/inputs/ImageInput';
import GenerateEditInputForSrandartTypes from '@/components/shared/models-windows/shared/generated-inputs/GenerateEditInputForSrandartTypes';
import GenerateEditInputForUpdateDtoScheme from '@/components/shared/models-windows/shared/generated-inputs/GenerateEditInputForUpdateDtoScheme';
import ZodErrorModalWindow from '@/components/shared/models-windows/shared/models-windows/ZodErrorModalWindow';
import BeachTypeInput from '@/components/shared/models-windows/specific-inputs/multipleInputs/BeachTypeInput';
import DietTypeInput from '@/components/shared/models-windows/specific-inputs/multipleInputs/DietTypeInput';
import ForKidsInput from '@/components/shared/models-windows/specific-inputs/multipleInputs/ForKidsInput';
import InHotelInput from '@/components/shared/models-windows/specific-inputs/multipleInputs/InHotelInput';
import InRoomInput from '@/components/shared/models-windows/specific-inputs/multipleInputs/InRoomInput';
import SingleCityInput from '@/components/shared/models-windows/specific-inputs/singleInputes/SingleCityInput';
import { CrudService } from '@/service/shared/CrudService';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';
import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { ZodError } from 'zod';

const UpdateHotelModalWindow = <
    TGetModelDto extends ModelDto,
    Service extends CrudService<TGetModelDto, object, ModelDto>>(
        {
            isOpen,
            onClose,
            model,
            service,
            setModel,
            specificUpdateMap
        }: {
            isOpen: boolean,
            onClose: () => void,
            model: TGetModelDto,
            service: Service,
            setModel: (model: TGetModelDto) => void;
            specificUpdateMap: Map<string, (innerSetState: React.SetStateAction<any>, object: TGetModelDto) => void>;
        }) => {


    let [objectState
        ,
        setState
    ] = useState(model);

    const [isError, setIsError] = useState(false);
    const [errors, setErros] = useState<Zod.ZodIssue[]>([]);

    useEffect(() => {
        specificUpdateMap.forEach((key, value) => {
            key(setState, objectState);
        });
    },
        [isOpen]);


    const onChange = (e: any, type: string) => {
        let { name, value } = e.target;
        if (type === "number") {
            value = Number(value)
            setState((prevState: any) => ({ ...prevState, [name]: value }));
        }
        else if (type == "boolean") {

            value = Boolean(value)
            setState((prevState: any) => ({ ...prevState, [name]: value }));
        }
        else {
            setState((prevState: any) => ({ ...prevState, [name]: value }));
        }
    };


    const [initialState, setInitialState] = useState({ ...model });

    const clearState = () => {
        setState({ ...initialState });
    };

    const handleSubmit = async () => {
        objectState.id = model.id;
        try {
            await service.update(objectState);
            setState({ ...objectState });
            setInitialState({ ...objectState });
            setModel(objectState);
            onClose();
        } catch (e) {
            if (e instanceof ZodError) {
                setErros(e.errors);
                setIsError(true);
            }
            else {
                throw e;
            }

        }
    }



    const innerOnClose = () => {
        clearState();
        onClose();
    }
    return (
        <>
            <Modal
            isOpen={isOpen}
            onClose={innerOnClose}
            scrollBehavior='inside' 
            size='2xl'
              >
                <ModalContent>
                    {(innerOnClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Update the hotel</ModalHeader>
                            <ModalBody>
                                    <GenerateEditInputForSrandartTypes
                                        onChange={onChange}
                                        updateObject={objectState}
                                        updateScheme={service.updateDtoSchema}
                                    />

                                    <SingleCityInput 
                                        onChange={onChange}

                                        currectValue={(objectState as any)['cityId']}                                    
                                    />
                                    
                                    <InHotelInput
                                     onChange={onChange}
                                      currectValue={(objectState as any)['inHotelIds']}                                    
                                    />

                                    <ForKidsInput
                                     onChange={onChange}
                                      currectValue={(objectState as any)['forKidIds']}                                    
                                    />

                                    <BeachTypeInput 
                                        onChange={onChange}
                                        currectValue={(objectState as any)['beachTypesIds']}                                    
                                    />


                                    <InRoomInput 
                                        onChange={onChange}
                                        currectValue={(objectState as any)['inRoomIds']}                                    
                                    />

                                    <DietTypeInput
                                        onChange={onChange}
                                        currectValue={(objectState as any)['dietTypeIds']}                                    
                                    />

                                    <ImageInput photoableId={objectState.id}                                    
                                    />


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
            <ZodErrorModalWindow
                errors={errors}
                isOpen={isError}
                setIsOpen={setIsError}
            />
        </>
    )
}

export default UpdateHotelModalWindow