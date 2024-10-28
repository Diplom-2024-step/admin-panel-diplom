import { GetForKidsDto } from '@/AppDtos/Dto/Models/ForKids/get-for-kids-dto';
import { Chip } from '@nextui-org/react';
import React from 'react'
import SharedMultipleDetail from '../shared/SharedMultipleDetail';

const ForKidsDetails = (
{
    items
}
: 
{
    items: GetForKidsDto[]
}
) => {
 const renderFunction = (item:GetForKidsDto) => 
        {
            return (
            <Chip key={item.id} className='mr-2'>{item.name}</Chip>
                
            );
        }


  return (
    <SharedMultipleDetail<GetForKidsDto>
     items={items}
      renderFunction={renderFunction}
    onSelectRenderFunction={renderFunction }
     label={'For kids'}    
    
    />
  )
}


export default ForKidsDetails