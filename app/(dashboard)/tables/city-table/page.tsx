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
import RenderFunction from "@/types/table/RenderFunction";
import { GetCountryDto } from "@/AppDtos/Dto/Models/Countries/get-country-dto";

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

    const displayCountry:RenderFunction = (value: GetCountryDto) => {
      return <Icon icon={value.icon}
      />
    }

  return <ModelLayout icon={<Icon icon="solar:city-linear" />} title="Cities"
                      service={new CityService()}
                      createButton={returnButtonForOpenCreateWindow}
                      updateButton={returnButtonForOpenUpdateWindow}
                      accessibleColumns={
                        ["name", "latitud", "longitud", "country"]

                      }
                      displayColumnsMap={
                        new Map([
                          ["country", displayCountry]
                        ])
                      }
                      specificSort={new Map([[
                        "country", "Country.Name"
                      ]])}
                      />;
};

export default page;