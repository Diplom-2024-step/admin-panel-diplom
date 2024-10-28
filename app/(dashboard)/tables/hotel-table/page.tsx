"use client"
import React, { ReactElement } from "react";
import ModelLayout from "@/components/layouts/ModelLayout";
import { Icon } from "@iconify-icon/react";
import CountryInput from "@/components/shared/models-windows/specific-inputs/singleInputes/CountryInput";
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
import RenderFunction from "@/types/table/RenderFunction";
import { GetCityDto } from "@/AppDtos/Dto/Models/Hotels/get-city-dto";
import { GetDietTypeDto } from "@/AppDtos/Dto/Models/DietTypes/get-diet-type-dto";
import ButtonForOpenUpdateModalWindowForHotel from "@/components/for-models/hotels/buttons/ButtonForOpenUpdateModalWindowForHotel";
import ButtonForOpenViewDetailModalWindowForHotel from "@/components/for-models/hotels/buttons/ButtonForOpenViewDetailModalWindowForHotel";

const page = () => {
  let hotelService = new HotelService();


  const returnIds = (items: ModelDto[]): string[] => {
    return items.map(item => item.id);
  };

  const takeOutIds = (setSateOfObject: React.SetStateAction<any>, items: ModelDto[], propertyName:string) : ((innerSetState: React.SetStateAction<any>, object:GetHotelDto) => void) => { 
    return setSateOfObject((prevState: any) => ({ ...prevState, [propertyName]: returnIds(items)} ))}


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
      <ButtonForOpenUpdateModalWindowForHotel
          specificUpdateMap={new Map(
            [
              ["city",
                (setSateOfObject: React.SetStateAction<any>, object: GetHotelDto) => { setSateOfObject((prevState: any) => ({ ...prevState, ["cityId"]: object.city.id })) }
              ],

              ["inHotels",
                (setSateOfObject: React.SetStateAction<any>, object: GetHotelDto) => takeOutIds(setSateOfObject, object.inHotels, "inHotelIds")
              ],

              ["forKids",
                (setSateOfObject: React.SetStateAction<any>, object: GetHotelDto) => takeOutIds(setSateOfObject, object.forKids, "forKidIds")
              ],

              ["forSports",
                (setSateOfObject: React.SetStateAction<any>, object: GetHotelDto) => takeOutIds(setSateOfObject, object.forSports, "forSportIds")
              ],

              ["beachTypes",
                (setSateOfObject: React.SetStateAction<any>, object: GetHotelDto) => takeOutIds(setSateOfObject, object.beachTypes, "beachTypesIds")
              ],

              ["inRooms",
                (setSateOfObject: React.SetStateAction<any>, object: GetHotelDto) => takeOutIds(setSateOfObject, object.inRooms, "inRoomIds")
              ],

               ["dietTypes",
                (setSateOfObject: React.SetStateAction<any>, object: GetHotelDto) => takeOutIds(setSateOfObject, object.dietTypes, "dietTypeIds")
              ],

              ["roomTypes",

                (setSateOfObject: React.SetStateAction<any>, object: GetHotelDto) => takeOutIds(setSateOfObject, object.roomTypes, "roomTypeIds")
              ],


            ]


          )}
          model={model}
          service={service}
          setModel={setModel}
          specificInputMap={new Map()}
        />
      );
    };

  const returnButtonForOpenViewDetailWindow: ReturnButtonForOpenViewDetailWindowFunction<GetHotelDto> = (model: GetHotelDto) => {
    return <ButtonForOpenViewDetailModalWindowForHotel
      model={model}
    />
  }


  const cityRenderFunction: RenderFunction = (model: GetCityDto) => {
    return (
      <div className="flex items-center">
        <Icon icon={model.country.icon} className="mr-2" />
        <span>{model.name}</span>
      </div>

    );
  }

  return (
    <ModelLayout
      icon={<Icon icon="fa6-solid:hotel" />}
      title="Hotels"
      service={hotelService}
      createButton={returnButtonForOpenCreateWindow}
      dontAllowSort={[]}
      viewDetailButton={returnButtonForOpenViewDetailWindow}
      updateButton={returnButtonForOpenUpdateWindow}
      accessibleColumns={["name", "city", "stars"]}
      displayColumnsMap={new Map([
        ["city", cityRenderFunction]
      ])}
    />
  );
};

export default page