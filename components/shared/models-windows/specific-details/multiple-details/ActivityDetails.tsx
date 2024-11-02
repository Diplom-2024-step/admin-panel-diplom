import { GetActivityDto } from '@/AppDtos/Dto/Models/Activities/get-activity-dto';
import { Chip } from '@nextui-org/react';
import React from 'react'
import SharedMultipleDetail from '../shared/SharedMultipleDetail';

const ActivityDetails  = (
{
    items,
    label
}
: 
{
    items: GetActivityDto[],
    label?: string
}
) => {
 const renderFunction = (item:GetActivityDto) => 
        {
            return (
            <Chip key={item.id} className='mr-2'>{item.name}</Chip>
                
            );
        }


  return (
    <SharedMultipleDetail<GetActivityDto>
     items={items}
      renderFunction={renderFunction}
    onSelectRenderFunction={renderFunction }
     label={label? label : 'activities'}    
    
    />
  )
}

export default ActivityDetails