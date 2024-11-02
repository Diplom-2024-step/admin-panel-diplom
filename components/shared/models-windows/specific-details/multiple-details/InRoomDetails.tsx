import { GetInRoomDto } from '@/AppDtos/Dto/Models/InRooms/get-in-room-dto';
import { Chip } from '@nextui-org/react';
import React from 'react'
import SharedMultipleDetail from '../shared/SharedMultipleDetail';

const InRoomDetails = (
{
    items
}
: 
{
    items: GetInRoomDto[]
}
) => {
 const renderFunction = (item:GetInRoomDto) => 
        {
            return (
            <Chip key={item.id} className='mr-2'>{item.name}</Chip>
                
            );
        }


  return (
    <SharedMultipleDetail<GetInRoomDto>
     items={items}
      renderFunction={renderFunction}
    onSelectRenderFunction={renderFunction }
     label={'In room'}    
    
    />
  )
}
export default InRoomDetails