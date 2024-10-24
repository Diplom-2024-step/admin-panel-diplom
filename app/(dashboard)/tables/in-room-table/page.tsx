"use client";
import React from "react";
import ModelLayout from "@/components/layouts/ModelLayout";
import { Icon } from "@iconify-icon/react";
import ButtonForOpenCreateModalWindow from "@/components/shared/models-windows/shared/buttons/ButtonForOpenCreateModalWindow";
import ReturnButtonForOpenCreateWindowFunction from "@/types/model-windows/buttons/create-buttons/ReturnButtonForOpenCreateWindowFunction";
import { CrudService } from "@/service/shared/CrudService";
import { ModelDto } from "@/AppDtos/Shared/model-dto";
import ReturnButtonForOpenUpdateWindowFunction from "@/types/model-windows/buttons/update-buttons/ReturnButtonForOpenUpdateWindowFunction";
import ButtonForOpenUpdateModalWindow from "@/components/shared/models-windows/shared/buttons/ButtonForOpenUpdateModalWindow";
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
