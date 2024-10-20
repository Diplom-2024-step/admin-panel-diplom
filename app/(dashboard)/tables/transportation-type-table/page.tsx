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
import { TransportationTypeService } from "@/service/crudServices/TransportationTypeService";
import { GetTransportationTypeDto } from "@/AppDtos/Dto/Models/TransportationTypes/get-transportation-type-dto";
import ButtonForOpenViewDetailModalWindow from "@/components/shared/models-windows/shared/buttons/ButtonForOpenDetailModalWindow";
import ReturnButtonForOpenViewDetailWindowFunction from "@/types/model-windows/buttons/view-details-buttons/ReturnButtonForOpenViewDetailWindowFunction";

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
      specificUpdateMap={new Map()}
        model={model}
        service={service}
        setModel={setModel}
        specificInputMap={new Map()}
      />
    );
  };

 const returnButtonForOpenViewDetailWindow: ReturnButtonForOpenViewDetailWindowFunction<GetTransportationTypeDto> = (model: GetTransportationTypeDto) => {
    return <ButtonForOpenViewDetailModalWindow

      model={model}
      specificRenderMap={new Map()}
    />
  }

  return (
    <ModelLayout
      icon={<Icon icon="fa6-solid:truck-plane" />}
      title="TransportationType"
      service={transportationTypeService}
      createButton={returnButtonForOpenCreateWindow}
      viewDetailButton={returnButtonForOpenViewDetailWindow}
      dontAllowSort={[]}
      updateButton={returnButtonForOpenUpdateWindow}
      accessibleColumns={["id", "name"]}
      displayColumnsMap={new Map()}
    />
  );
};

export default page;
