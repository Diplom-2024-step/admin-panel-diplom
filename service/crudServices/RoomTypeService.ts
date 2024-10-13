import { GetRoomTypeDto, getRoomTypeDtoSchema } from "@/AppDtos/Dto/Models/RoomTypes/get-room-type-dto";
import { CrudService } from "../shared/CrudService";
import { CreateRoomTypeDto, createRoomTypeDtoSchema } from "@/AppDtos/Dto/Models/RoomTypes/create-room-type-dto";
import { UpdateRoomTypeDto, updateRoomTypeDtoSchema } from "@/AppDtos/Dto/Models/RoomTypes/update-room-type-dto";

export class RoomTypeService extends CrudService<
    GetRoomTypeDto,
    CreateRoomTypeDto,
    UpdateRoomTypeDto
> {
    public constructor() {
        super(getRoomTypeDtoSchema, createRoomTypeDtoSchema, updateRoomTypeDtoSchema);
    }
}
