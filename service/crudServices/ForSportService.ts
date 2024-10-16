import { GetForSportDto, getForSportDtoSchema } from "@/AppDtos/Dto/Models/ForSports/get-for-sport-dto";
import { CrudService } from "../shared/CrudService";
import { CreateForSportDto, createForSportDtoSchema } from "@/AppDtos/Dto/Models/ForSports/create-for-sport-dto";
import { UpdateForSportDto, updateForSportDtoSchema } from "@/AppDtos/Dto/Models/ForSports/update-for-sport-dto";

export class ForSportService extends CrudService<
    GetForSportDto,
    CreateForSportDto,
    UpdateForSportDto
> {
    public constructor() {
        super(getForSportDtoSchema, createForSportDtoSchema, updateForSportDtoSchema);
    }
}
