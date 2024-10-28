import { GetDietTypeDto } from '@/AppDtos/Dto/Models/DietTypes/get-diet-type-dto';
import { DietTypeService } from '@/service/crudServices/DietTypeService';
import SpecificInput from '@/types/model-windows/specific-inputs/SpecificInput';
import { Chip } from '@nextui-org/react';
import React from 'react'
import SharedMultipleInput from '../shared/SharedMultipleInput';

const DietTypeInput: SpecificInput = (
    {
        currectValue,
        onChange
    }


) => {


    let service = new DietTypeService();


    const renderFunction = (item: GetDietTypeDto) => {
        return (
                <span>{item.name}</span>

        );
    }

    const onSelectRenderFunction = (item:GetDietTypeDto) => 
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
            placeholder='select diet types'
            propertyName='dietTypeIds'
            renderFunction={renderFunction}
            service={service}

        />
    )
}

export default DietTypeInput