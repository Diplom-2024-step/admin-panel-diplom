import SpecificInput from '@/types/model-windows/specific-inputs/SpecificInput'
import React from 'react'
import SharedMultipleInput from '../shared/SharedMultipleInput'
import { GetForKidsDto } from '@/AppDtos/Dto/Models/ForKids/get-for-kids-dto'
import { ForKidsService } from '@/service/crudServices/ForKidsService'
import { Chip } from '@nextui-org/react'

const ForKidsInput: SpecificInput = (
    {
        currectValue,
        onChange
    }


) => {


    let service = new ForKidsService();


    const renderFunction = (item: GetForKidsDto) => {
        return (
                <span>{item.name}</span>

        );
    }

    const onSelectRenderFunction = (item:GetForKidsDto) => 
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
            placeholder='select for kids'
            propertyName='forKidIds'
            renderFunction={renderFunction}
            service={service}

        />
    )
}

export default ForKidsInput