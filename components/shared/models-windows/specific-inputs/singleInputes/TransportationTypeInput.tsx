import { GetTransportationTypeDto } from '@/AppDtos/Dto/Models/TransportationTypes/get-transportation-type-dto';
import { TransportationTypeService } from '@/service/crudServices/TransportationTypeService';
import SpecificInput from '@/types/model-windows/specific-inputs/SpecificInput';
import React from 'react'
import SharedSingleInput from '../shared/SharedSingleInput';

const TransportationTypeInput:SpecificInput = (
{
  currectValue,
  onChange
}

) => {

  let transportationTypeService = new TransportationTypeService();


  const renderFunction = (item:GetTransportationTypeDto) =>
    {
      return (
           <div className="flex items-center">
                  <span>{item.name}</span>
                </div>

      );
    }


  return (
    <SharedSingleInput
      propertyName='transportationTypeId'
      currectValue={currectValue}
      onChange={onChange}
      placeholder='Select transportation type'
      service={transportationTypeService}
      onSelectRenderFunction={renderFunction}
      renderFunction={renderFunction}

    
    
    />
  )
}


export default TransportationTypeInput