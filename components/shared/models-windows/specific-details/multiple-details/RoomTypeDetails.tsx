import { GetRoomTypeDto } from '@/AppDtos/Dto/Models/RoomTypes/get-room-type-dto';
import { Chip } from '@nextui-org/react';
import React from 'react'
import SharedMultipleDetail from '../shared/SharedMultipleDetail';

const RoomTypeDetails = (
{
    items
}
: 
{
    items: GetRoomTypeDto[]
}
) => {
 const renderFunction = (item:GetRoomTypeDto) => 
        {
            return (
            <Chip key={item.id} className='mr-2'>{item.name}</Chip>
                
            );
        }


  return (
    <SharedMultipleDetail<GetRoomTypeDto>
     items={items}
      renderFunction={renderFunction}
    onSelectRenderFunction={renderFunction }
     label={'Room types'}    
    
    />
  )
}


export default RoomTypeDetails