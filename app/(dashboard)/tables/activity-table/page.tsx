"use client"
import { GetActivityDto } from '@/AppDtos/Dto/Models/Activities/get-activity-dto';
import { GetCountryDto } from '@/AppDtos/Dto/Models/Countries/get-country-dto';
import { ModelDto } from '@/AppDtos/Shared/model-dto';
import ModelLayout from '@/components/layouts/ModelLayout';
import Carousel from '@/components/shared/Carousel';
import ButtonForOpenCreateModalWindow from '@/components/shared/models-windows/shared/buttons/ButtonForOpenCreateModalWindow';
import ButtonForOpenViewDetailModalWindow from '@/components/shared/models-windows/shared/buttons/ButtonForOpenDetailModalWindow';
import ButtonForOpenUpdateModalWindow from '@/components/shared/models-windows/shared/buttons/ButtonForOpenUpdateModalWindow';
import CountyDetails from '@/components/shared/models-windows/specific-details/single-details/CountyDetails';
import CountryInput from '@/components/shared/models-windows/specific-inputs/singleInputes/CountryInput';
import { ActivityService } from '@/service/crudServices/ActivityService';
import { CrudService } from '@/service/shared/CrudService';
import ReturnButtonForOpenCreateWindowFunction from '@/types/model-windows/buttons/create-buttons/ReturnButtonForOpenCreateWindowFunction';
import ReturnButtonForOpenUpdateWindowFunction from '@/types/model-windows/buttons/update-buttons/ReturnButtonForOpenUpdateWindowFunction';
import ReturnButtonForOpenViewDetailWindowFunction from '@/types/model-windows/buttons/view-details-buttons/ReturnButtonForOpenViewDetailWindowFunction';
import OnChangeFunctionProps from '@/types/model-windows/specific-inputs/OnChangeFunctionProps';
import RenderFunction from '@/types/table/RenderFunction';
import { Icon } from '@iconify-icon/react';
import React from 'react'

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
  const returnButtonForOpenUpdateWindow: ReturnButtonForOpenUpdateWindowFunction<GetActivityDto, CrudService<GetActivityDto, object, ModelDto>> = (
    model: GetActivityDto,
    service: CrudService<GetActivityDto, object, ModelDto>,
    setModel: (model: GetActivityDto) => void
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
          (setSateOfObject: React.SetStateAction<any>, object: GetActivityDto) => { setSateOfObject((prevState: any) => ({ ...prevState, ["countryId"]: object.country.id })) }
        ]
      ])}
    />

  }

  const displayCountryDetails: RenderFunction = (value: GetCountryDto) => {
    
    return (<CountyDetails items={[value]}/>)
  }

  const displayImages: RenderFunction = (value: string[]) => {

    return (<Carousel
    images={value}
    />)
  }

  const displayCountryColumn: RenderFunction = (value:GetCountryDto) => 
    {
     return <div className="flex items-center gap-2">
       <div className="flex items-center">
         <Icon icon={value.icon} className="mr-2" />
         <span>{value.name}</span>
       </div>
     </div>
    }

  const returnButtonForOpenViewDetailWindowFunction: ReturnButtonForOpenViewDetailWindowFunction<GetActivityDto> = (model: GetActivityDto) => {
    return <ButtonForOpenViewDetailModalWindow
      model={model}
      specificRenderMap={new Map(
        [["country", displayCountryDetails],
         ["urls", displayImages]]

      )}
    />
  }

  return <ModelLayout icon={<Icon icon="dashicons:buddicons-activity" />} title="Activities"
    service={new ActivityService()}
    createButton={returnButtonForOpenCreateWindow}
    viewDetailButton={returnButtonForOpenViewDetailWindowFunction}
    updateButton={returnButtonForOpenUpdateWindow}
    accessibleColumns={
      ["name", "country", "price"]

    }
    displayColumnsMap={
      new Map([
        ["country", displayCountryColumn]
      ])
    }
    dontAllowSort={[
      "country",
    ]}
  />;
};

export default page