import { GetTransportationTypeDto } from '@/AppDtos/Dto/Models/TransportationTypes/get-transportation-type-dto';
import React from 'react'
import SharedSingleDetail from '../shared/SharedSingleDetail';

const TransportationTypeDetails = (
{
    items,
    label
} 
:
{
    items:GetTransportationTypeDto[],
    label?:string
}) => {


    const renderFunction = (item:GetTransportationTypeDto) =>
    {
      return (
           <div className="flex items-center">
                  <span>{item.name}</span>
                </div>

      );
    }


  return (
    <SharedSingleDetail<GetTransportationTypeDto>
    items={items}
    renderFunction={renderFunction}
    onSelectRenderFunction={renderFunction}
    label={label? label : 'Transportaiob type'}    
    />
  )
}

export default TransportationTypeDetails