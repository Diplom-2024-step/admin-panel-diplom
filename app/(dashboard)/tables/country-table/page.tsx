"use client";
import { CountryService } from "@/service/crudServices/CountryService";
import React, { ReactElement } from "react";
import ModelLayout from "@/components/layouts/ModelLayout";
import { Icon } from "@iconify-icon/react";
import CountryInput from "@/components/shared/models-windows/specific-inputs/CountryInput";
import ButtonForOpenCreateModalWindow from "@/components/shared/models-windows/shared/buttons/ButtonForOpenCreateModalWindow";
import OnChangeFunctionProps from "@/types/model-windows/specific-inputs/OnChangeFunctionProps";
import ReturnButtonForOpenCreateWindowFunction from "@/types/model-windows/buttons/create-buttons/ReturnButtonForOpenCreateWindowFunction";
import { GetCountryDto } from "@/AppDtos/Dto/Models/Countries/get-country-dto";
import { CrudService } from "@/service/shared/CrudService";
import { ModelDto } from "@/AppDtos/Shared/model-dto";
import ReturnButtonForOpenUpdateWindowFunction from "@/types/model-windows/buttons/update-buttons/ReturnButtonForOpenUpdateWindowFunction";
import ButtonForOpenUpdateModalWindowProps from "@/types/model-windows/buttons/update-buttons/ButtonForOpenUpdateModalWindowProps";
import ButtonForOpenUpdateModalWindow from "@/components/shared/models-windows/shared/buttons/ButtonForOpenUpdateModalWindow";
import RenderFunction from "@/types/table/RenderFunction";

const page = () => {
  let countryService = new CountryService();

    const returnButtonForOpenCreateWindow : ReturnButtonForOpenCreateWindowFunction<CrudService<ModelDto, object, ModelDto>>  = (service:CrudService<ModelDto, object, ModelDto> ) =>  {
      
     

      return <ButtonForOpenCreateModalWindow 
                        service={service}
                         specificInputMap={new Map()}
                         
                         />

    }


    const returnButtonForOpenUpdateWindow : ReturnButtonForOpenUpdateWindowFunction<GetCountryDto, CrudService<GetCountryDto, object, ModelDto>>  = (
      model: GetCountryDto,
      service: CrudService<GetCountryDto, object, ModelDto>,
      setModel: (model: GetCountryDto) => void
     ) =>  {
      
     

      return <ButtonForOpenUpdateModalWindow
        model={model}
        service={service}
        setModel={setModel}
        specificInputMap={new Map()}
      
      />
    }

    const displayIcon:RenderFunction = (value: any) => {
      console.debug(value);
      return <Icon icon={value}
      />
    }



  return <ModelLayout icon={<Icon icon="solar:globus-bold-duotone" />} title="Countries"
                      service={countryService} 
                      createButton={returnButtonForOpenCreateWindow}
                      updateButton={returnButtonForOpenUpdateWindow}
                      accessibleColumns={
                        ["icon", "name"]

                      }
                      displayColumnsMap={
                        new Map([
                          ["icon", displayIcon]
                        ]
                        )
                      }
                      specificSort={new Map()}
                      />;
};

export default page;