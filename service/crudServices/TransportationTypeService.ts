import { GetTransportationTypeDto, getTransportationTypeDtoSchema } from "@/AppDtos/Dto/Models/TransportationTypes/get-transportation-type-dto";
import { CrudService } from "../shared/CrudService";
import { CreateTransportationTypeDto, createTransportationTypeDtoSchema } from "@/AppDtos/Dto/Models/TransportationTypes/create-transportation-type-dto";
import { UpdateTransportationTypeDto, updateTransportationTypeDtoSchema } from "@/AppDtos/Dto/Models/TransportationTypes/update-transportation-type-dto";

export class TransportationTypeService extends CrudService<
    GetTransportationTypeDto,
    CreateTransportationTypeDto,
    UpdateTransportationTypeDto
> {
    public constructor() {
        super(getTransportationTypeDtoSchema, createTransportationTypeDtoSchema, updateTransportationTypeDtoSchema);
    }
}
