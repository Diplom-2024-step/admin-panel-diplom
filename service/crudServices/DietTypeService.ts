import { GetDietTypeDto, getDietTypeDtoSchema } from "@/AppDtos/Dto/Models/DietTypes/get-diet-type-dto";
import { CrudService } from "../shared/CrudService";
import { CreateDietTypeDto, createDietTypeDtoSchema } from "@/AppDtos/Dto/Models/DietTypes/create-diet-type-dto";
import { UpdateDietTypeDto, updateDietTypeDtoSchema } from "@/AppDtos/Dto/Models/DietTypes/update-diet-type-dto";

export class DietTypeService extends CrudService<
    GetDietTypeDto,
    CreateDietTypeDto,
    UpdateDietTypeDto
> {
    public constructor() {
        super(getDietTypeDtoSchema, createDietTypeDtoSchema, updateDietTypeDtoSchema);
    }
}