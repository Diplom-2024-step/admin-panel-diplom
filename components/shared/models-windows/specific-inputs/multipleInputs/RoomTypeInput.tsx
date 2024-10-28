import { GetRoomTypeDto } from '@/AppDtos/Dto/Models/RoomTypes/get-room-type-dto';
import { RoomTypeService } from '@/service/crudServices/RoomTypeService';
import SpecificInput from '@/types/model-windows/specific-inputs/SpecificInput';
import { Chip } from '@nextui-org/react';
import React from 'react'
import SharedMultipleInput from '../shared/SharedMultipleInput';

const RoomTypeInput: SpecificInput = (
    {
        currectValue,
        onChange
    }


) => {


    let service = new RoomTypeService();


    const renderFunction = (item: GetRoomTypeDto) => {
        return (
                <span>{item.name}</span>

        );
    }

    const onSelectRenderFunction = (item:GetRoomTypeDto) => 
        {
            return (
            <Chip key={item.id} className='mr-2'>{item.name}</Chip>
                
            );
        }

    return (
        <SharedMultipleInput
            currectValue={currectValue}
            onChange={onChange}
            onSelectRenderFunction={onSelectRenderFunction}
            placeholder='select room types'
            propertyName='roomTypeIds'
            renderFunction={renderFunction}
            service={service}

        />
    )
}

export default RoomTypeInput