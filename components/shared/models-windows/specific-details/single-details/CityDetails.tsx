import { GetCityDto } from '@/AppDtos/Dto/Models/Hotels/get-city-dto'
import React from 'react'
import SharedSingleDetail from '../shared/SharedSingleDetail'
import { Icon } from '@iconify-icon/react'

const CityDetails = (
{
    items,
    label
} 
:
{
    items:GetCityDto[],
    label?:string
}) => {


    const renderFunction = (item:GetCityDto) =>
    {
      return (
           <div className="flex items-center">
                  <Icon icon={item.country.icon} className="mr-2" />
                  <span>{item.name}</span>
                </div>

      );
    }


  return (
    <SharedSingleDetail<GetCityDto>
    items={items}
    renderFunction={renderFunction}
    onSelectRenderFunction={renderFunction}
    label={label? label : 'City'}    
    />
  )
}

export default CityDetails