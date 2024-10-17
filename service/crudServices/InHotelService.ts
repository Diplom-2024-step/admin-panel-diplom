import { GetInHotelDto, getInHotelDtoSchema } from "@/AppDtos/Dto/Models/InHotels/get-in-hotel-dto";
import { CrudService } from "../shared/CrudService";
import { CreateInHotelDto, createInHotelDtoSchema } from "@/AppDtos/Dto/Models/InHotels/create-in-hotel-dto";
import { UpdateInHotelDto, updateInHotelDtoSchema } from "@/AppDtos/Dto/Models/InHotels/update-in-hotel-dto";

export class InHotelService extends CrudService<
    GetInHotelDto,
    CreateInHotelDto,
    UpdateInHotelDto
> {
    public constructor() {
        super(getInHotelDtoSchema, createInHotelDtoSchema, updateInHotelDtoSchema);
    }
}
