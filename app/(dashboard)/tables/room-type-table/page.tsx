"use client";
import React, { ReactElement } from "react";
import ModelLayout from "@/components/layouts/ModelLayout";
import { Icon } from "@iconify-icon/react";
import CountryInput from "@/components/shared/models-windows/specific-inputs/CountryInput";
import ButtonForOpenCreateModalWindow from "@/components/shared/models-windows/shared/buttons/ButtonForOpenCreateModalWindow";
import ReturnButtonForOpenCreateWindowFunction from "@/types/model-windows/buttons/create-buttons/ReturnButtonForOpenCreateWindowFunction";
import { CrudService } from "@/service/shared/CrudService";
import { ModelDto } from "@/AppDtos/Shared/model-dto";
import ReturnButtonForOpenUpdateWindowFunction from "@/types/model-windows/buttons/update-buttons/ReturnButtonForOpenUpdateWindowFunction";
import ButtonForOpenUpdateModalWindow from "@/components/shared/models-windows/shared/buttons/ButtonForOpenUpdateModalWindow";
import { RoomTypeService } from "@/service/crudServices/RoomTypeService";
import { GetRoomTypeDto } from "@/AppDtos/Dto/Models/RoomTypes/get-room-type-dto";
import ReturnButtonForOpenViewDetailWindowFunction from "@/types/model-windows/buttons/view-details-buttons/ReturnButtonForOpenViewDetailWindowFunction";
import ButtonForOpenViewDetailModalWindow from "@/components/shared/models-windows/shared/buttons/ButtonForOpenDetailModalWindow";

const page = () => {
  let roomTypeService = new RoomTypeService();

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
    GetRoomTypeDto,
    CrudService<GetRoomTypeDto, object, ModelDto>
  > = (
    model: GetRoomTypeDto,
    service: CrudService<GetRoomTypeDto, object, ModelDto>,
    setModel: (model: GetRoomTypeDto) => void
  ) => {
    return (
      <ButtonForOpenUpdateModalWindow
      specificUpdateMap={new Map()}
        model={model}
        service={service}
        setModel={setModel}
        specificInputMap={new Map()}
      />
    );
  };

  const returnButtonForOpenViewDetailWindowFunction: ReturnButtonForOpenViewDetailWindowFunction<
    GetRoomTypeDto
  > = (model: GetRoomTypeDto) => {
    return (
      <ButtonForOpenViewDetailModalWindow
        model={model}
        specificRenderMap={new Map()}
      />
    );
  };

   const returnButtonForOpenViewDetailWindow: ReturnButtonForOpenViewDetailWindowFunction<GetRoomTypeDto> = (model: GetRoomTypeDto) => {
    return <ButtonForOpenViewDetailModalWindow
      model={model}
      specificRenderMap={new Map()}
    />
  }

  return (
    <ModelLayout
      icon={<Icon icon="fluent:conference-room-20-filled" />}
      title="RoomTypes"
      service={roomTypeService}
      createButton={returnButtonForOpenCreateWindow}
      dontAllowSort={[]}
      viewDetailButton={returnButtonForOpenViewDetailWindow}
      updateButton={returnButtonForOpenUpdateWindow}
      accessibleColumns={["id", "name"]}
      displayColumnsMap={new Map()}
      />
  );
};

export default page;
