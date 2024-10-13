import { GetCountryDto, getCountryDtoSchema } from "@/AppDtos/Dto/Models/Countries/get-country-dto";
import {CrudService} from "../shared/CrudService";
import { CreateCountryDto, createCountryDtoSchema } from "@/AppDtos/Dto/Models/Countries/create-country-dto";
import { UpdateCountryDto, updateCountryDtoSchema } from "@/AppDtos/Dto/Models/Countries/update-country-dto";

export class CountryService extends CrudService<
    GetCountryDto,
    CreateCountryDto,
    UpdateCountryDto
> {

    public constructor() {
        super(getCountryDtoSchema, createCountryDtoSchema, updateCountryDtoSchema);
    }

}


