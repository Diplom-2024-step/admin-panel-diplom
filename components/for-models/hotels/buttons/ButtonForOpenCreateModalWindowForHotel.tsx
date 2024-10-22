"use client"
import { ModelDto } from '@/AppDtos/Shared/model-dto'
import CreateModelWindow from '@/components/shared/models-windows/shared/models-windows/CreateModelWindow'
import { CrudService } from '@/service/shared/CrudService'
import ButtonForOpenCreateModalWindowProps from '@/types/model-windows/buttons/create-buttons/ButtonForOpenCreateModalWindowProps'
import { Button } from '@nextui-org/react'
import React, { useState } from 'react'
import CreateHotelModalWindow from '../create-modal-window/CreateHotelModalWindow'
import { HotelService } from '@/service/crudServices/HotelService'

const ButtonForOpenCreateModalWindowForHotel = <
  Service extends CrudService<ModelDto, object, ModelDto>>({
    service,
  } :  ButtonForOpenCreateModalWindowProps<Service>) => {


    const [isModalOpen, setIsModalOpen] = useState(false);


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
  return (
    <>
      <Button
        color='secondary'
        onClick={openModal}
      >
        Create a new model
      </Button>
      <CreateHotelModalWindow
        isOpen={isModalOpen}
        service={service as any as HotelService}
        onClose={closeModal}
      />
    </>
  )
}

export default ButtonForOpenCreateModalWindowForHotel