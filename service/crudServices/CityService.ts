import { GetCityDto, getCityDtoSchema } from "@/AppDtos/Dto/Models/Hotels/get-city-dto";
import { CrudService } from "../shared/CrudService";
import { CreateCityDto, createCityDtoSchema } from "@/AppDtos/Dto/Models/Cities/create-city-dto";
import { UpdateCityDto, updateCityDtoSchema } from "@/AppDtos/Dto/Models/Cities/update-city-dto";



export class CityService extends CrudService<
    GetCityDto,
    CreateCityDto,
    UpdateCityDto
> {

    public constructor() {
        super(getCityDtoSchema, createCityDtoSchema, updateCityDtoSchema);
    }

}



