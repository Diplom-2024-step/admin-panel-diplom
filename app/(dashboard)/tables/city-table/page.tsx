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
import ReturnButtonForOpenViewDetailWindowFunction from "@/types/model-windows/buttons/view-details-buttons/ReturnButtonForOpenViewDetailWindowFunction";
import { GetCityDto } from "@/AppDtos/Dto/Models/Hotels/get-city-dto";
import ButtonForOpenUpdateModalWindow from "@/components/shared/models-windows/shared/buttons/ButtonForOpenUpdateModalWindow";
import RenderFunction from "@/types/table/RenderFunction";
import { GetCountryDto } from "@/AppDtos/Dto/Models/Countries/get-country-dto";
import ButtonForOpenViewDetailModalWindow from "@/components/shared/models-windows/shared/buttons/ButtonForOpenDetailModalWindow";

const page = () => {


  const returnButtonForOpenCreateWindow: ReturnButtonForOpenCreateWindowFunction<CrudService<ModelDto, object, ModelDto>> = (service: CrudService<ModelDto, object, ModelDto>) => {

    const getSpificInputForCountryId = (e: OnChangeFunctionProps, currectValue: any) => {
      return <CountryInput
        onChange={e}
        currectValue={currectValue}
      />;
    }

    return <ButtonForOpenCreateModalWindow
      service={service}
      specificInputMap={new Map([
        ["countryId", getSpificInputForCountryId]
      ])} />

  }
  const returnButtonForOpenUpdateWindow: ReturnButtonForOpenUpdateWindowFunction<GetCityDto, CrudService<GetCityDto, object, ModelDto>> = (
    model: GetCityDto,
    service: CrudService<GetCityDto, object, ModelDto>,
    setModel: (model: GetCityDto) => void
  ) => {

    const getSpificInputForCountryId = (e: OnChangeFunctionProps, currectValue: any) => {
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

      specificUpdateMap={new Map([
        ["country",
          (setSateOfObject: React.SetStateAction<any>, object: GetCityDto) => { setSateOfObject((prevState: any) => ({ ...prevState, ["countryId"]: object.country.id })) }
        ]
      ])}
    />

  }

  const displayCountry: RenderFunction = (value: GetCountryDto) => {
    return <div className="flex items-center gap-2">
      <div className="flex items-center">
        <Icon icon={value.icon} className="mr-2" />
        <span>{value.name}</span>
      </div>
    </div>
  }

  const returnButtonForOpenViewDetailWindowFunction: ReturnButtonForOpenViewDetailWindowFunction<GetCityDto> = (model: GetCityDto) => {
    return <ButtonForOpenViewDetailModalWindow
      model={model}
      specificRenderMap={new Map(
        [["country", displayCountry]]

      )}
    />
  }

  return <ModelLayout icon={<Icon icon="solar:city-linear" />} title="Cities"
    service={new CityService()}
    createButton={returnButtonForOpenCreateWindow}
    viewDetailButton={returnButtonForOpenViewDetailWindowFunction}
    updateButton={returnButtonForOpenUpdateWindow}
    accessibleColumns={
      ["name", "latitud", "longitud", "country"]

    }
    displayColumnsMap={
      new Map([
        ["country", displayCountry]
      ])
    }
    dontAllowSort={[
      "country",
    ]}
  />;
};

export default page;