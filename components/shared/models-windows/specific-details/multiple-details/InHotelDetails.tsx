import { GetInHotelDto } from '@/AppDtos/Dto/Models/InHotels/get-in-hotel-dto';
import { Chip } from '@nextui-org/react';
import React from 'react'
import SharedMultipleDetail from '../shared/SharedMultipleDetail';

const InHotelDetails = (
{
    items
}
: 
{
    items: GetInHotelDto[]
}
) => {
 const renderFunction = (item:GetInHotelDto) => 
        {
            return (
            <Chip key={item.id} className='mr-2'>{item.name}</Chip>
                
            );
        }


  return (
    <SharedMultipleDetail<GetInHotelDto>
     items={items}
      renderFunction={renderFunction}
    onSelectRenderFunction={renderFunction }
     label={'In hotel'}    
    
    />
  )
}

export default InHotelDetails