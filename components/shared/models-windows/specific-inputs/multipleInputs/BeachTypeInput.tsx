import { GetBeachTypeDto } from '@/AppDtos/Dto/Models/BeachTypes/get-beach-type-dto';
import { BeachTypeService } from '@/service/crudServices/BeachTypeService';
import SpecificInput from '@/types/model-windows/specific-inputs/SpecificInput';
import { Chip } from '@nextui-org/react';
import React from 'react'
import SharedMultipleInput from '../shared/SharedMultipleInput';

const BeachTypeInput: SpecificInput = (
    {
        currectValue,
        onChange
    }


) => {


    let service = new BeachTypeService();


    const renderFunction = (item: GetBeachTypeDto) => {
        return (
                <span>{item.name}</span>

        );
    }

    const onSelectRenderFunction = (item:GetBeachTypeDto) => 
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
            placeholder='select beach types'
            propertyName='beachTypeIds'
            renderFunction={renderFunction}
            service={service}

        />
    )
}


export default BeachTypeInput