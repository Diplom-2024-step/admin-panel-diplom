import { GetInRoomDto } from '@/AppDtos/Dto/Models/InRooms/get-in-room-dto';
import { InRoomService } from '@/service/crudServices/InRoomService';
import SpecificInput from '@/types/model-windows/specific-inputs/SpecificInput';
import { Chip } from '@nextui-org/react';
import React from 'react'
import SharedMultipleInput from '../shared/SharedMultipleInput';

const InRoomInput: SpecificInput = (
    {
        currectValue,
        onChange
    }


) => {


    let service = new InRoomService();


    const renderFunction = (item: GetInRoomDto) => {
        return (
                <span>{item.name}</span>

        );
    }

    const onSelectRenderFunction = (item:GetInRoomDto) => 
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
            placeholder='select in room'
            propertyName='inRoomIds'
            renderFunction={renderFunction}
            service={service}

        />
    )
}

export default InRoomInput