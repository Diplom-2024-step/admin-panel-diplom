
import { GetHotelDto } from '@/AppDtos/Dto/Models/Hotels/get-hotel-dto';
import React from 'react'
import SharedSingleDetail from '../shared/SharedSingleDetail';

const HotelDetails = (
{
    items,
    label
} 
:
{
    items:GetHotelDto[],
    label?:string
}) => {


    const renderFunction = (item:GetHotelDto) =>
    {
      return (
           <div className="flex items-center">
                  <span>{item.name}</span>
                </div>

      );
    }


  return (
    <SharedSingleDetail<GetHotelDto>
    items={items}
    renderFunction={renderFunction}
    onSelectRenderFunction={renderFunction}
    label={label? label : 'Hotel'}    
    />
  )
}

export default HotelDetails