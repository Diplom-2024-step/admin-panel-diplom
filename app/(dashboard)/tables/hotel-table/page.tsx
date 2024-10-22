"use client"
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
import { HotelService } from "@/service/crudServices/HotelService";
import ButtonForOpenViewDetailModalWindow from "@/components/shared/models-windows/shared/buttons/ButtonForOpenDetailModalWindow";
import ReturnButtonForOpenViewDetailWindowFunction from "@/types/model-windows/buttons/view-details-buttons/ReturnButtonForOpenViewDetailWindowFunction";
import { GetHotelDto } from "@/AppDtos/Dto/Models/Hotels/get-hotel-dto";
import ButtonForOpenCreateModalWindowForHotel from "@/components/for-models/hotels/buttons/ButtonForOpenCreateModalWindowForHotel";

const page = () => {
  let roomTypeService = new HotelService();

  const returnButtonForOpenCreateWindow: ReturnButtonForOpenCreateWindowFunction<
    CrudService<ModelDto, object, ModelDto>
  > = (service: CrudService<ModelDto, object, ModelDto>) => {
    return (
      <ButtonForOpenCreateModalWindowForHotel
        service={service}
        specificInputMap={new Map()}
      />
    );
  };

  const returnButtonForOpenUpdateWindow: ReturnButtonForOpenUpdateWindowFunction<
    GetHotelDto,
    CrudService<GetHotelDto, object, ModelDto>
  > = (
    model: GetHotelDto,
    service: CrudService<GetHotelDto, object, ModelDto>,
    setModel: (model: GetHotelDto) => void
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

   const returnButtonForOpenViewDetailWindow: ReturnButtonForOpenViewDetailWindowFunction<GetHotelDto> = (model: GetHotelDto) => {
    return <ButtonForOpenViewDetailModalWindow
      model={model}
      specificRenderMap={new Map()}
    />
  }

  return (
    <ModelLayout
      icon={<Icon icon="fa6-solid:hotel" />}
      title="Hotels"
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

export default page