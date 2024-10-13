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
import { GetRoomTypeDto } from "@/AppDtos/Dto/Models/RoomTypes/get-room-type-dto";
import { TransportationTypeService } from "@/service/crudServices/TransportationTypeService";
import { GetTransportationTypeDto } from "@/AppDtos/Dto/Models/TransportationTypes/get-transportation-type-dto";

const page = () => {
  let transportationTypeService = new TransportationTypeService();

  const returnButtonForOpenCreateWindow: ReturnButtonForOpenCreateWindowFunction<
    CrudService<ModelDto, object, ModelDto>
  > = (service: CrudService<ModelDto, object, ModelDto>) => {
    return (
      <ButtonForOpenCreateModalWindow
        service={service}
        specificInputMap={new Map()}
      />
    );
  };

  const returnButtonForOpenUpdateWindow: ReturnButtonForOpenUpdateWindowFunction<
    GetTransportationTypeDto,
    CrudService<GetTransportationTypeDto, object, ModelDto>
  > = (
    model: GetTransportationTypeDto,
    service: CrudService<GetTransportationTypeDto, object, ModelDto>,
    setModel: (model: GetTransportationTypeDto) => void
  ) => {
    return (
      <ButtonForOpenUpdateModalWindow
        model={model}
        service={service}
        setModel={setModel}
        specificInputMap={new Map()}
      />
    );
  };

  return (
    <ModelLayout
      icon={<Icon icon="fa6-solid:truck-plane" />}
      title="TransportationType"
      service={transportationTypeService}
      createButton={returnButtonForOpenCreateWindow}
      updateButton={returnButtonForOpenUpdateWindow}
      accessibleColumns={["id", "name"]}
      displayColumnsMap={new Map()}
      specificSort={new Map()}
    />
  );
};

export default page;
