"use client"
import { GetTourDto } from '@/AppDtos/Dto/Models/Tours/get-tour-dto';
import { ModelDto } from '@/AppDtos/Shared/model-dto';
import ButtonForOpenCreateModalWindowForHotel from '@/components/for-models/hotels/buttons/ButtonForOpenCreateModalWindowForHotel';
import ButtonForOpenViewDetailModalWindowForHotel from '@/components/for-models/hotels/buttons/ButtonForOpenViewDetailModalWindowForHotel';
import ButtonForOpenCreateModalWindowForTour from '@/components/for-models/tours/buttons/ButtonForOpenCreateModalWindowForTour';
import ButtonForOpenViewDetailModalWindowForTour from '@/components/for-models/tours/buttons/ButtonForOpenViewDetailModalWindowForTour';
import ModelLayout from '@/components/layouts/ModelLayout';
import ButtonForOpenCreateModalWindow from '@/components/shared/models-windows/shared/buttons/ButtonForOpenCreateModalWindow';
import ButtonForOpenViewDetailModalWindow from '@/components/shared/models-windows/shared/buttons/ButtonForOpenDetailModalWindow';
import ButtonForOpenUpdateModalWindow from '@/components/shared/models-windows/shared/buttons/ButtonForOpenUpdateModalWindow';
import { TourService } from '@/service/crudServices/TourService';
import { CrudService } from '@/service/shared/CrudService';
import ReturnButtonForOpenCreateWindowFunction from '@/types/model-windows/buttons/create-buttons/ReturnButtonForOpenCreateWindowFunction';
import ReturnButtonForOpenUpdateWindowFunction from '@/types/model-windows/buttons/update-buttons/ReturnButtonForOpenUpdateWindowFunction';
import ReturnButtonForOpenViewDetailWindowFunction from '@/types/model-windows/buttons/view-details-buttons/ReturnButtonForOpenViewDetailWindowFunction';
import { Icon } from '@iconify-icon/react';
import React from 'react'

const page = () => {
  let tourService = new TourService();

  const returnButtonForOpenCreateWindow: ReturnButtonForOpenCreateWindowFunction<
    CrudService<ModelDto, object, ModelDto>
  > = (service: CrudService<ModelDto, object, ModelDto>) => {
    return (
      <ButtonForOpenCreateModalWindowForTour
        service={service}
        specificInputMap={new Map()}
      />
    );
  };

  const returnButtonForOpenUpdateWindow: ReturnButtonForOpenUpdateWindowFunction<
    GetTourDto,
    CrudService<GetTourDto, object, ModelDto>
  > = (
    model: GetTourDto,
    service: CrudService<GetTourDto, object, ModelDto>,
    setModel: (model: GetTourDto) => void
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


  const returnButtonForOpenViewDetailWindow: ReturnButtonForOpenViewDetailWindowFunction<
    GetTourDto
  > = (model: GetTourDto) => {
    return (
      <ButtonForOpenViewDetailModalWindowForTour
        model={model}
      />
    );
  };

  return (
    <ModelLayout
      icon={<Icon icon="carbon:tour" />}
      title="Tours"
      service={tourService}
      createButton={returnButtonForOpenCreateWindow}
      updateButton={returnButtonForOpenUpdateWindow}
      viewDetailButton={returnButtonForOpenViewDetailWindow}
      accessibleColumns={["id", "name"]}
      displayColumnsMap={new Map()}
      dontAllowSort={[]}
    />
  );
}

export default page