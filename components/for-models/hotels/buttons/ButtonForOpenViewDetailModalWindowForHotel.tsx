"use client"
import { GetHotelDto } from '@/AppDtos/Dto/Models/Hotels/get-hotel-dto'
import ViewDetailsWindow from '@/components/shared/models-windows/shared/models-windows/ViewDetailsWindow'
import {  EyeIcon } from "@nextui-org/shared-icons";
import { Tooltip } from '@nextui-org/react'
import React, { useState } from 'react'
import ViewDetailHotelModalWindow from '../view-details-modal-window/ViewDetailHotelModalWindow';

const ButtonForOpenViewDetailModalWindowForHotel = (
  {
    model
  }
  :
  {
    model:GetHotelDto
  }
) => {


   const [isModalOpen, setIsModalOpen] = useState(false);


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



  return (
     <>
      <Tooltip content="Details">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <EyeIcon onClick={openModal} />
            </span>
          </Tooltip>
      <ViewDetailHotelModalWindow
      isOpen={isModalOpen}
      model={model}
      onClose={closeModal}
      />
    </>
  )
}

export default ButtonForOpenViewDetailModalWindowForHotel