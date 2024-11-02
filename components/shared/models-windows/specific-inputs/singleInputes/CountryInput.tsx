"use client"
import { GetCountryDto } from "@/AppDtos/Dto/Models/Countries/get-country-dto";
import { ReturnPageDto } from "@/AppDtos/Shared/return-page-dto";
import { useAuthService } from "@/hooks/auth";
import { CountryService } from "@/service/crudServices/CountryService";
import SpecificInput from "@/types/model-windows/specific-inputs/SpecificInput";
import { useCallback, useEffect, useState } from "react";
import { LoadingState, SortDescriptor } from "@react-types/shared";
import { ZodError } from "zod";
import { toTitleCase } from "@/utils/TextUtils";
import LoadingCircle from "../../../skeletons/LoadingCircle";
import { Select, SelectedItems, SelectItem } from "@nextui-org/select";
import { Icon } from "@iconify-icon/react";
import { SharedSelection } from "@nextui-org/react";
import useGetPageOfItems from "@/hooks/useGetPageOfItems";
import useDebounceState from "@/hooks/useDebounceState";
import SharedSingleInput from "../shared/SharedSingleInput";

const CountryInput:SpecificInput = (
{
  currectValue,
  onChange
}

) => {

  let countryService = new CountryService();


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
    <SharedSingleInput
      propertyName='countryId'
      currectValue={currectValue}
      onChange={onChange}
      placeholder='Select a country'
      service={countryService}
      onSelectRenderFunction={renderFunction}
      renderFunction={renderFunction}

    
    
    />
  )
}



export default CountryInput;