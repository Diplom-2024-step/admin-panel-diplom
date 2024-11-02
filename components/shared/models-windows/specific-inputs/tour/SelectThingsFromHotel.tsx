"use client"
import { GetHotelDto } from '@/AppDtos/Dto/Models/Hotels/get-hotel-dto'
import OnChangeFunctionProps from '@/types/model-windows/specific-inputs/OnChangeFunctionProps'
import React from 'react'
import RoomTypeSingleInputFromCollection from '../singleInputesFromCollection/RoomTypeSingleInputFromCollection'
import DietTypeSingleInputFromCollection from '../singleInputesFromCollection/DietTypeSingleInputFromCollection'

const SelectThingsFromHotel = (
    {
        hotel,
        onChangeRoomType,
        roomTypeId,
        onChangeDietType,
        dietTypeId

    }:
    {
        hotel: GetHotelDto,
        onChangeRoomType: OnChangeFunctionProps,
        roomTypeId:string,
        onChangeDietType:OnChangeFunctionProps,
        dietTypeId:string
    }
) => {





  return (
    <>
    <RoomTypeSingleInputFromCollection
    currectValue={roomTypeId}
    items={hotel.roomTypes}
    onChange={onChangeRoomType}
    />
    <DietTypeSingleInputFromCollection 
    onChange={onChangeDietType}
     currectValue={dietTypeId}
      items={hotel.dietTypes}    
    />

    </>
  )
}

export default SelectThingsFromHotel