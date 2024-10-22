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
import RenderFunction from "@/types/table/RenderFunction";
import ReturnButtonForOpenViewDetailWindowFunction from "@/types/model-windows/buttons/view-details-buttons/ReturnButtonForOpenViewDetailWindowFunction";
import ButtonForOpenViewDetailModalWindow from "@/components/shared/models-windows/shared/buttons/ButtonForOpenDetailModalWindow";
import { InHotelService } from "@/service/crudServices/InHotelService";
import { GetInHotelDto } from "@/AppDtos/Dto/Models/InHotels/get-in-hotel-dto";

const page = () => {
  let inHotelService = new InHotelService();

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
    GetInHotelDto,
    CrudService<GetInHotelDto, object, ModelDto>
  > = (
    model: GetInHotelDto,
    service: CrudService<GetInHotelDto, object, ModelDto>,
    setModel: (model: GetInHotelDto) => void
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


  const ReturnButtonForOpenViewDetailWindowFunction: ReturnButtonForOpenViewDetailWindowFunction<
    GetInHotelDto
  > = (model: GetInHotelDto) => {
    return (
      <ButtonForOpenViewDetailModalWindow
        model={model}
        specificRenderMap={new Map()}
      />
    );
  };

  return (
    <ModelLayout
      icon={<Icon icon="guidance:reception-hotel-bell" />}
      title="InHotel"
      service={inHotelService}
      createButton={returnButtonForOpenCreateWindow}
      updateButton={returnButtonForOpenUpdateWindow}
      viewDetailButton={ReturnButtonForOpenViewDetailWindowFunction}
      accessibleColumns={["id", "name"]}
      displayColumnsMap={new Map()}
      dontAllowSort={[]}
    />
  );
};

export default page;
