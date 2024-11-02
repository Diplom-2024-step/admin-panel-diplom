"use client"
import GenerateCreateInputForCreateDtoScheme from '@/components/shared/models-windows/shared/generated-inputs/GenerateCreateInputForCreateDtoScheme';
import GenerateInputForStandartTypes from '@/components/shared/models-windows/shared/generated-inputs/GenerateInputForStandartTypes';
import ZodErrorModalWindow from '@/components/shared/models-windows/shared/models-windows/ZodErrorModalWindow';
import BeachTypeInput from '@/components/shared/models-windows/specific-inputs/multipleInputs/BeachTypeInput';
import DietTypeInput from '@/components/shared/models-windows/specific-inputs/multipleInputs/DietTypeInput';
import ForKidsInput from '@/components/shared/models-windows/specific-inputs/multipleInputs/ForKidsInput';
import ForSportInput from '@/components/shared/models-windows/specific-inputs/multipleInputs/ForSportInput';
import InHotelInput from '@/components/shared/models-windows/specific-inputs/multipleInputs/InHotelInput';
import InRoomInput from '@/components/shared/models-windows/specific-inputs/multipleInputs/InRoomInput';
import RoomTypeInput from '@/components/shared/models-windows/specific-inputs/multipleInputs/RoomTypeInput';
import SingleCityInput from '@/components/shared/models-windows/specific-inputs/singleInputes/SingleCityInput';
import CountryInput from '@/components/shared/models-windows/specific-inputs/singleInputes/CountryInput';
import { HotelService } from '@/service/crudServices/HotelService';
import { CrudService } from '@/service/shared/CrudService';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react'
import { ZodError } from 'zod';

const CreateHotelModalWindow = ({
  isOpen,
  onClose,
  service,

}: {
  isOpen: boolean,
  onClose: () => void,
  service: HotelService

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
              <ModalHeader className="flex flex-col gap-1 text-center">Create a new hotel</ModalHeader>
              <ModalBody>
                {
                  <GenerateInputForStandartTypes
                    createScheme={service.createDtoSchema}
                    form={form}
                    onChange={onChange}
                  />
                }
                <SingleCityInput
                  currectValue={form['cityId']}
                  onChange={onChange}
                />

                <ForKidsInput
                      currectValue={form['forKidIds']}
                      onChange={onChange}
                />

                <InHotelInput 
                onChange={onChange}
                currectValue={form['inHotelIds']}                
                />

                <ForSportInput onChange={onChange} currectValue={form['forSportIds']}                
                />

                <BeachTypeInput onChange={onChange} currectValue={form['beachTypeIds']}                
                />

                <RoomTypeInput onChange={onChange} currectValue={form['roomTypeIds']}/>

                <InRoomInput onChange={onChange} currectValue={form['inRoomIds']}/>

                <DietTypeInput onChange={onChange} currectValue={form['dietTypeIds']}
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

export default CreateHotelModalWindow