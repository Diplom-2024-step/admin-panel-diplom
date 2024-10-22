"use client"
import GenerateCreateInputForCreateDtoScheme from '@/components/shared/models-windows/shared/generated-inputs/GenerateCreateInputForCreateDtoScheme';
import GenerateInputForStandartTypes from '@/components/shared/models-windows/shared/generated-inputs/GenerateInputForStandartTypes';
import ZodErrorModalWindow from '@/components/shared/models-windows/shared/models-windows/ZodErrorModalWindow';
import { HotelService } from '@/service/crudServices/HotelService';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react'
import { ZodError } from 'zod';

const CreateHotelModalWindow = ({
  isOpen,
  onClose,
  service

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
      <Modal isOpen={isOpen} onClose={onClose}
      size='full'
      
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Create a new hotel</ModalHeader>
              <ModalBody>
                {
                  <GenerateInputForStandartTypes
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
      <ZodErrorModalWindow
        errors={errors}
        isOpen={isError}
        setIsOpen={setIsError}
      />
    </>
  )
}

export default CreateHotelModalWindow