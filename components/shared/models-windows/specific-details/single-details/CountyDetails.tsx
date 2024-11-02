import { GetCountryDto } from '@/AppDtos/Dto/Models/Countries/get-country-dto';
import { Icon } from '@iconify-icon/react';
import React from 'react'
import SharedSingleDetail from '../shared/SharedSingleDetail';

const CountyDetails = (
{
    items
} 
:
{
    items:GetCountryDto[]
}) => {


    const renderFunction = (item:GetCountryDto) =>
    {
      return (
           <div className="flex items-center">
                  <Icon icon={item.icon} className="mr-2" />
                  <span>{item.name}</span>
                </div>

      );
    }


  return (
    <SharedSingleDetail<GetCountryDto>
    items={items}
    renderFunction={renderFunction}
    onSelectRenderFunction={renderFunction}
    label={'Country'}    
    />
  )
}


export default CountyDetails