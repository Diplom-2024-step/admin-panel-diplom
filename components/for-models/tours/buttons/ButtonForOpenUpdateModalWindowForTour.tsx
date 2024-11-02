"use client"
import { ModelDto } from '@/AppDtos/Shared/model-dto';
import { CrudService } from '@/service/shared/CrudService';
import ButtonForOpenUpdateModalWindowProps from '@/types/model-windows/buttons/update-buttons/ButtonForOpenUpdateModalWindowProps';
import { Tooltip } from '@nextui-org/react';
import React, { useState } from 'react'

const ButtonForOpenUpdateModalWindowForTour = <
    TGetModelDto extends ModelDto,
    Service extends CrudService<TGetModelDto, object, ModelDto>>({
         model,
         service,
         setModel,
         specificInputMap = new Map([]),
         specificUpdateMap = new Map([])
         }: ButtonForOpenUpdateModalWindowProps<TGetModelDto, Service>) => {


    const [isModalOpen, setIsModalOpen] = useState(false);


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
  return (
    <>
      <Tooltip content="Edit hotel">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <EditIcon onClick={openModal} />
                </span>
            </Tooltip>
      <UpdateHotelModalWindow
        isOpen={isModalOpen}
        service={service as any }
        onClose={closeModal}
        model={model}
        setModel={setModel}
        specificUpdateMap={specificUpdateMap} />
    </>
  )
}

export default ButtonForOpenUpdateModalWindowForTour