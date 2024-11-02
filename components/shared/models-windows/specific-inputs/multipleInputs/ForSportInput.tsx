
import { GetForSportDto } from '@/AppDtos/Dto/Models/ForSports/get-for-sport-dto';
import { ForSportService } from '@/service/crudServices/ForSportService';
import SpecificInput from '@/types/model-windows/specific-inputs/SpecificInput';
import { Chip } from '@nextui-org/react';
import React from 'react'
import SharedMultipleInput from '../shared/SharedMultipleInput';

const ForSportInput: SpecificInput = (
    {
        currectValue,
        onChange
    }


) => {


    let service = new ForSportService();


    const renderFunction = (item: GetForSportDto) => {
        return (
                <span>{item.name}</span>

        );
    }

    const onSelectRenderFunction = (item:GetForSportDto) => 
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
            placeholder='select for sport'
            propertyName='forSportIds'
            renderFunction={renderFunction}
            service={service}

        />
    )
}

export default ForSportInput