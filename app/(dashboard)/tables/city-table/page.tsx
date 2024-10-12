"use client";
import React from "react";
import ModelLayout from "@/components/layouts/ModelLayout";
import { Icon } from "@iconify-icon/react";
import { CityService } from "@/service/crudServices/CityService";
import ButtonForOpenCreateModalWindow from "@/components/shared/models-windows/shared/buttons/ButtonForOpenCreateModalWindow";
import CountryInput from "@/components/shared/models-windows/specific-inputs/CountryInput";
import ReturnButtonForOpenCreateWindowFunction from "@/types/model-windows/buttons/create-buttons/ReturnButtonForOpenCreateWindowFunction";
import { CrudService } from "@/service/shared/CrudService";
import { ModelDto } from "@/AppDtos/Shared/model-dto";
import OnChangeFunctionProps from "@/types/model-windows/specific-inputs/OnChangeFunctionProps";
import ReturnButtonForOpenUpdateWindowFunction from "@/types/model-windows/buttons/update-buttons/ReturnButtonForOpenUpdateWindowFunction";
import { GetCityDto } from "@/AppDtos/Dto/Models/Hotels/get-city-dto";
import ButtonForOpenUpdateModalWindow from "@/components/shared/models-windows/shared/buttons/ButtonForOpenUpdateModalWindow";
import SpecificInput from "@/types/model-windows/specific-inputs/SpecificInput";

const page = () => {


    const returnButtonForOpenCreateWindow : ReturnButtonForOpenCreateWindowFunction<CrudService<ModelDto, object, ModelDto>>  = (service:CrudService<ModelDto, object, ModelDto> ) =>  {
      
      const getSpificInputForCountryId = (e:OnChangeFunctionProps, currectValue:any) => 
        {
          return <CountryInput
                          onChange={e}
                          currectValue={currectValue}
                          />;
        }

      return <ButtonForOpenCreateModalWindow 
                        service={service}
                         specificInputMap={new Map([
                          ["countryId", getSpificInputForCountryId]
                         ])}/>

    }
    const returnButtonForOpenUpdateWindow : ReturnButtonForOpenUpdateWindowFunction<GetCityDto, CrudService<GetCityDto, object, ModelDto>>  = (
      model: GetCityDto,
      service: CrudService<GetCityDto, object, ModelDto>,
      setModel: (model: GetCityDto) => void
     ) =>  {
      
      const getSpificInputForCountryId = (e:OnChangeFunctionProps, currectValue:any ) =>
        {
          return <CountryInput
                          onChange={e}
                          currectValue={currectValue}
                          />;
        }

      return <ButtonForOpenUpdateModalWindow
        model={model}
        service={service}
        setModel={setModel}
        specificInputMap={new Map([
                          ["countryId", getSpificInputForCountryId]
                         ])}
      
      />

    }

  return <ModelLayout icon={<Icon icon="solar:city-linear" />} title="Cities"
                      service={new CityService()}
                      createButton={returnButtonForOpenCreateWindow}
                      updateButton={returnButtonForOpenUpdateWindow}
                      />;
};

export default page;