"use client"
import { GetTourDto } from '@/AppDtos/Dto/Models/Tours/get-tour-dto';
import {  EyeIcon } from "@nextui-org/shared-icons";
import { Tooltip } from '@nextui-org/react';
import React, { useState } from 'react'
import ViewDetailTourModalWindow from '../view-details-modal-window/ViewDetailTourModalWindow';

const ButtonForOpenViewDetailModalWindowForTour = (
  {
    model
  }
  :
  {
    model:GetTourDto
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
      <ViewDetailTourModalWindow
      isOpen={isModalOpen}
      model={model}
      onClose={closeModal}
      />
    </>
  )
}

export default ButtonForOpenViewDetailModalWindowForTour