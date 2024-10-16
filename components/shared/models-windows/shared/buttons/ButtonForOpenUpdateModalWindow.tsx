"use client"
import React, { useState } from 'react'
import { Tooltip } from '@nextui-org/react';
import { DeleteIcon, EditIcon, EyeIcon } from "@nextui-org/shared-icons";
import { ModelDto } from '@/AppDtos/Shared/model-dto';
import { CrudService } from '@/service/shared/CrudService';
import EditModelWindow from '../models-windows/EditModelWindow';
import ButtonForOpenUpdateModalWindowProps from '@/types/model-windows/buttons/update-buttons/ButtonForOpenUpdateModalWindowProps';


const ButtonForOpenUpdateModalWindow = <
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
            <Tooltip content="Edit model">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <EditIcon onClick={openModal} />
                </span>
            </Tooltip>
            <EditModelWindow
                isOpen={isModalOpen}
                onClose={closeModal}
                model={model} 
                service={service}
                setModel={setModel}
                specificInputMap={specificInputMap}
                specificUpdateMap={specificUpdateMap}

                />
        </>
    )
}

export default ButtonForOpenUpdateModalWindow