import SpecificInputFromCollection from '@/types/model-windows/specific-inputs/SpecificInputFromCollection'
import React from 'react'
import SharedSingleInputFromCollection from '../shared/SharedSingleInputFromCollection'
import { GetRoomTypeDto } from '@/AppDtos/Dto/Models/RoomTypes/get-room-type-dto'
const RoomTypeSingleInputFromCollection:SpecificInputFromCollection = (
    {
        currectValue,
        items,
        onChange,
        placeHolder,
        propertyName
    }
) => {

   const renderFunction = (item: GetRoomTypeDto) => {
        return (
                <span>{item.name}</span>

        );
    }



  return (
    <SharedSingleInputFromCollection<GetRoomTypeDto> 
      items={items as GetRoomTypeDto[]}
      onChange={onChange} currectValue={currectValue} renderFunction={renderFunction}
      onSelectRenderFunction={renderFunction}
      placeholder={placeHolder ? placeHolder : "select room type"}
      propertyName={propertyName ? propertyName : "roomTypeId"}    
    />
  )
}

export default RoomTypeSingleInputFromCollection