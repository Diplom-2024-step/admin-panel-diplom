import { GetDietTypeDto } from '@/AppDtos/Dto/Models/DietTypes/get-diet-type-dto';
import { Chip } from '@nextui-org/react';
import React from 'react'
import SharedMultipleDetail from '../shared/SharedMultipleDetail';

const DietTypesDetails = (
{
    items
}
: 
{
    items: GetDietTypeDto[]
}
) => {
 const renderFunction = (item:GetDietTypeDto) => 
        {
            return (
            <Chip key={item.id} className='mr-2'>{item.name}</Chip>
                
            );
        }


  return (
    <SharedMultipleDetail<GetDietTypeDto>
     items={items}
      renderFunction={renderFunction}
    onSelectRenderFunction={renderFunction }
     label={'Diet types'}    
    
    />
  )
}


export default DietTypesDetails