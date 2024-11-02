import { GetDietTypeDto } from '@/AppDtos/Dto/Models/DietTypes/get-diet-type-dto';
import SpecificInputFromCollection from '@/types/model-windows/specific-inputs/SpecificInputFromCollection'
import React from 'react'
import SharedSingleInputFromCollection from '../shared/SharedSingleInputFromCollection';

const DietTypeSingleInputFromCollection :SpecificInputFromCollection = (
{
    currectValue,
    items,
    onChange,
    placeHolder,
    propertyName
}
) => {
  const renderFunction = (item: GetDietTypeDto) => {
        return (
                <span>{item.name}</span>

        );
    }



  return (
    <SharedSingleInputFromCollection<GetDietTypeDto> 
      items={items as GetDietTypeDto[]}
      onChange={onChange} currectValue={currectValue} renderFunction={renderFunction}
      onSelectRenderFunction={renderFunction}
      placeholder={placeHolder ? placeHolder : "select diet type"}
      propertyName={propertyName ? propertyName : "dietTypeId"}    
    />
  )
}

export default DietTypeSingleInputFromCollection