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
import { GetTransportationTypeDto } from "@/AppDtos/Dto/Models/TransportationTypes/get-transportation-type-dto";
import { InRoomService } from "@/service/crudServices/InRoomService";
import { GetInRoomDto } from "@/AppDtos/Dto/Models/InRooms/get-in-room-dto";
import ReturnButtonForOpenViewDetailWindowFunction from "@/types/model-windows/buttons/view-details-buttons/ReturnButtonForOpenViewDetailWindowFunction";
import ButtonForOpenViewDetailModalWindow from "@/components/shared/models-windows/shared/buttons/ButtonForOpenDetailModalWindow";

const page = () => {
  let inRoomService = new InRoomService();

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
    GetInRoomDto,
    CrudService<GetInRoomDto, object, ModelDto>
  > = (
    model: GetInRoomDto,
    service: CrudService<GetInRoomDto, object, ModelDto>,
    setModel: (model: GetInRoomDto) => void
  ) => {
    return (
      <ButtonForOpenUpdateModalWindow
        model={model}
        service={service}
        setModel={setModel}
        specificInputMap={new Map()}
        specificUpdateMap={new Map()}
      />
    );
  };

  const returnButtonForOpenViewDetailWindowFunction: ReturnButtonForOpenViewDetailWindowFunction<
    GetInRoomDto
  > = (model: GetInRoomDto) => {
    return (
      <ButtonForOpenViewDetailModalWindow
        model={model}
        specificRenderMap={new Map()}
      />
    );
  };

  return (
    <ModelLayout
      icon={<Icon icon="fontisto:room" />}
      title="InRoom"
      service={inRoomService}
      createButton={returnButtonForOpenCreateWindow}
      updateButton={returnButtonForOpenUpdateWindow}
      viewDetailButton={returnButtonForOpenViewDetailWindowFunction}
      dontAllowSort={[]}
      accessibleColumns={["id", "name"]}
      displayColumnsMap={new Map()}
    />
  );
};

export default page;
