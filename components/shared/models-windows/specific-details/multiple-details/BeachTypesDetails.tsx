import { GetBeachTypeDto } from '@/AppDtos/Dto/Models/BeachTypes/get-beach-type-dto'
import React from 'react'
import SharedSingleDetail from '../shared/SharedSingleDetail'
import SharedMultipleDetail from '../shared/SharedMultipleDetail'
import { Chip } from '@nextui-org/react'

const BeachTypesDetails = (
{
    items
}
: 
{
    items: GetBeachTypeDto[]
}
) => {
 const renderFunction = (item:GetBeachTypeDto) => 
        {
            return (
            <Chip key={item.id} className='mr-2'>{item.name}</Chip>
                
            );
        }


  return (
    <SharedMultipleDetail<GetBeachTypeDto>
     items={items}
      renderFunction={renderFunction}
    onSelectRenderFunction={renderFunction }
     label={'Beach types'}    
    
    />
  )
}

export default BeachTypesDetails