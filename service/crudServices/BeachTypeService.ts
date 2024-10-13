import { GetBeachTypeDto, getBeachTypeDtoSchema } from "@/AppDtos/Dto/Models/BeachTypes/get-beach-type-dto";
import { CrudService } from "../shared/CrudService";
import { CreateBeachTypeDto, createBeachTypeDtoSchema } from "@/AppDtos/Dto/Models/BeachTypes/create-beach-type-dto";
import { UpdateBeachTypeDto, updateBeachTypeDtoSchema } from "@/AppDtos/Dto/Models/BeachTypes/update-beach-type-dto";

export class BeachTypeService extends CrudService<
    GetBeachTypeDto,
    CreateBeachTypeDto,
    UpdateBeachTypeDto
> {
    public constructor() {
        super(getBeachTypeDtoSchema, createBeachTypeDtoSchema, updateBeachTypeDtoSchema);
    }
}
