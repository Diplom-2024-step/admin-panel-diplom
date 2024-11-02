"use client"
import { ModelDto } from '@/AppDtos/Shared/model-dto';
import { CrudService } from '@/service/shared/CrudService';
import ButtonForOpenCreateModalWindowProps from '@/types/model-windows/buttons/create-buttons/ButtonForOpenCreateModalWindowProps';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react'
import CreateHotelModalWindow from '../../hotels/create-modal-window/CreateHotelModalWindow';
import { TourService } from '@/service/crudServices/TourService';
import CreateTourModalWindow from '../create-modal-window/CreateTourModalWindow';

const ButtonForOpenCreateModalWindowForTour = <
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
      <CreateTourModalWindow
        isOpen={isModalOpen}
        service={service as any as TourService}
        onClose={closeModal}
      />
    </>
  )
}
export default ButtonForOpenCreateModalWindowForTour