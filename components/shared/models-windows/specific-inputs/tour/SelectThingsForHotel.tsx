"use client"
import { GetTourDto } from '@/AppDtos/Dto/Models/Tours/get-tour-dto'
import OnChangeFunctionProps from '@/types/model-windows/specific-inputs/OnChangeFunctionProps'
import React, { useState } from 'react'
import CountryInput from '../singleInputes/CountryInput'
import SelectCityFromCountry from './SelectCityFromCountry'
import SelectHotelFromCity from './SelectHotelFromCity'
import { GetHotelDto } from '@/AppDtos/Dto/Models/Hotels/get-hotel-dto'
import SelectThingsFromHotel from './SelectThingsFromHotel'
import ActivityInputFromCountry from '../multipleInputs/ActivityInputFromCountry'

const SelectThingsForHotel = (
{
  tour,
  onChange
} 
:
{
  tour: GetTourDto,
  onChange: OnChangeFunctionProps
} ) => {


  const [countryId, setCountryId] = useState<string>('');

  const [cityId, setCityId] = useState<string>('');

  const [hotel, setHotel] = useState<GetHotelDto>();

  const [roomTypeId, setRoomTypeId] = useState<string>('');

  const [dietTypeId, setDietTypeId] = useState<string>('');

  const [activityIds, setActivityIds] = useState<string[]>([]);


  const onChangeCountry:OnChangeFunctionProps = (
e, type

  ) => {

    setCountryId(e.target.value );
    setCityId('');


  }

  const onChangeCity:OnChangeFunctionProps = (
e, type
  ) => {
    setCityId(e.target.value);
    setHotel(undefined);
  }

  const onChangeHotel:OnChangeFunctionProps = (
e, type
  ) => {
    const hotelTarget =  e.target.value as any as GetHotelDto;
    setHotel(hotelTarget);
    onChange({
            target: {
                value: hotelTarget.id.toString(),
                name: "hotelId",
            }
        } as any,
            "string"
    );
  }

  const onChangeRoomType:OnChangeFunctionProps = (
    e, type
  ) => {
    setRoomTypeId(e.target.value);
    onChange({
            target: {
                value: e.target.value.toString(),
                name: "roomTypeId",
            }
        } as any,
            "string"
    );

  }

  const onChangeDietType:OnChangeFunctionProps = (
    e, type
  ) => {
    setDietTypeId(e.target.value);

    onChange({
            target: {
                value: e.target.value.toString(),
                name: "dietTypeId",
            }
        } as any,
            "string"
    );
  }

  const onChangeActivitiesIds: OnChangeFunctionProps = (e, type) => {

    setActivityIds(e.target.value as any);

    onChange(
      {
        target:{
          value: e.target.value,
          name:"activityIds"   
        }
      } as any,
      "array"
    );


  }





  return (
    <>

    <CountryInput 
    onChange={onChangeCountry}
     currectValue={countryId}    
    />

    {
      countryId ?<>
      <SelectCityFromCountry
      cityId={cityId} 
      countryId={countryId}
      setCity={onChangeCity}      
      />
      
      <ActivityInputFromCountry
      activityIds={activityIds}
      countryId={countryId}
      setActivities={onChangeActivitiesIds}
      />
      </>

      : <></>


    }
    {
      cityId ? <SelectHotelFromCity
        cityId={cityId}
        setHotel={onChangeHotel}
      
      />
      :<></>
    }

    {
      hotel ? <SelectThingsFromHotel
      hotel={hotel}
      onChangeRoomType={onChangeRoomType}
      dietTypeId={dietTypeId}
      onChangeDietType={onChangeDietType}
      roomTypeId={roomTypeId}
      /> : <></>

    }

    </>
  )
}

export default SelectThingsForHotel