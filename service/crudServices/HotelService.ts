import { GetHotelDto, getHotelDtoSchema } from "@/AppDtos/Dto/Models/Hotels/get-hotel-dto";
import { CrudService } from "../shared/CrudService";
import { CreateHotelDto, createHotelDtoSchema } from "@/AppDtos/Dto/Models/Hotels/create-hotel-dto";
import { UpdateHotelDto, updateHotelDtoSchema } from "@/AppDtos/Dto/Models/Hotels/update-hotel-dto";

export class HotelService extends CrudService<
    GetHotelDto,
    CreateHotelDto,
    UpdateHotelDto
> {
    public constructor() {
        super(getHotelDtoSchema, createHotelDtoSchema, updateHotelDtoSchema);
    }
}
