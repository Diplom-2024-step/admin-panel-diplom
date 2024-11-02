import { GetTourDto } from '@/AppDtos/Dto/Models/Tours/get-tour-dto';
import GenerateInputForStandartTypes from '@/components/shared/models-windows/shared/generated-inputs/GenerateInputForStandartTypes';
import ZodErrorModalWindow from '@/components/shared/models-windows/shared/models-windows/ZodErrorModalWindow';
import SingleCityInput from '@/components/shared/models-windows/specific-inputs/singleInputes/SingleCityInput';
import TransportationTypeInput from '@/components/shared/models-windows/specific-inputs/singleInputes/TransportationTypeInput';
import SelectThingsForHotel from '@/components/shared/models-windows/specific-inputs/tour/SelectThingsForHotel';
import { TourService } from '@/service/crudServices/TourService';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react'
import { ZodError } from 'zod';

const CreateTourModalWindow = ({
    isOpen,
    onClose,
    service,

}: {
    isOpen: boolean,
    onClose: () => void,
    service: TourService

}) => {
    const [initialForm, setInitialForm] = useState(service.createDtoSchema.parse({}));



    const [form, setForm] = useState({ ...initialForm });
    const [isError, setIsError] = useState(false);
    const [errors, setErros] = useState<Zod.ZodIssue[]>([]);



    const clearState = () => {
        setForm({ ...initialForm });
    };

    const onChange = (e: any, type: string) => {
        let { name, value } = e.target;
        if (type === "number") {
            value = Number(value)
            setForm((prevState: any) => ({ ...prevState, [name]: value }));
        }
        else if (type == "boolean") {

            value = Boolean(value)
            setForm((prevState: any) => ({ ...prevState, [name]: value }));
        }
        else {
            console.debug(e);
            setForm((prevState: any) => ({ ...prevState, [name]: value }));
        }
    };


    const handleSubmit = async () => {
        try {
            await service.create(form);
            clearState();
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

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                scrollBehavior='inside'
                size='2xl'
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center">Create a new Tour</ModalHeader>
                            <ModalBody>
                                {
                                    <GenerateInputForStandartTypes
                                        createScheme={service.createDtoSchema}
                                        form={form}
                                        onChange={onChange}
                                    />
                                }


                                <TransportationTypeInput
                                currectValue={form['transportationTypeId']}
                                onChange={onChange}
                                />

                                <SingleCityInput
                                    currectValue={form['toCityId']}
                                    propertyName={'toCityId'}
                                    onChange={onChange}
                                    placeHolder='select to'
                                />

                                <SingleCityInput
                                    currectValue={form['fromCityId']}
                                    propertyName={'fromCityId'}
                                    onChange={onChange}
                                    placeHolder='select from'
                                />

                                <SelectThingsForHotel tour={form as any} onChange={onChange}                                
                                />




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
            <ZodErrorModalWindow
                errors={errors}
                isOpen={isError}
                setIsOpen={setIsError}
            />
        </>
    )
}

export default CreateTourModalWindow