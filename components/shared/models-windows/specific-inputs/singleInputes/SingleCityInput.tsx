
import SpecificInput from '@/types/model-windows/specific-inputs/SpecificInput';
import React from 'react'
import SharedSingleInput from '../shared/SharedSingleInput';
import { CityService } from '@/service/crudServices/CityService';
import { GetCityDto } from '@/AppDtos/Dto/Models/Hotels/get-city-dto';
import { SelectedItems, SelectItem, SelectItemProps, SelectProps } from '@nextui-org/select';
import { Icon } from '@iconify-icon/react';

const SingleCityInput: SpecificInput = ({
  onChange,
  currectValue,
  propertyName,
  placeHolder
}) => {


  let cityService = new CityService();
  let property = "cityId"

  if (propertyName !== undefined)
    {
      property = propertyName;
    }

    if (placeHolder === undefined)
      {
        placeHolder = "select a city";
      }


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
    <SharedSingleInput
      propertyName={property}
      currectValue={currectValue}
      onChange={onChange}
      placeholder={placeHolder}
      service={cityService}
      onSelectRenderFunction={renderFunction}
      renderFunction={renderFunction}

    
    
    />
  )
}

export default SingleCityInput