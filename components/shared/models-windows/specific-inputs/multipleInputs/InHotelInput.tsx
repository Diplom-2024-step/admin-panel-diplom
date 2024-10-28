import { GetInHotelDto } from '@/AppDtos/Dto/Models/InHotels/get-in-hotel-dto';
import { InHotelService } from '@/service/crudServices/InHotelService';
import SpecificInput from '@/types/model-windows/specific-inputs/SpecificInput';
import { Chip } from '@nextui-org/react';
import React from 'react'
import SharedMultipleInput from '../shared/SharedMultipleInput';

const InHotelInput: SpecificInput = (
    {
        currectValue,
        onChange
    }


) => {


    let service = new InHotelService();


    const renderFunction = (item: GetInHotelDto) => {
        return (
                <span>{item.name}</span>

        );
    }

    const onSelectRenderFunction = (item:GetInHotelDto) => 
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
            placeholder='select in hotels'
            propertyName='inHotelIds'
            renderFunction={renderFunction}
            service={service}

        />
    )
}

export default InHotelInput