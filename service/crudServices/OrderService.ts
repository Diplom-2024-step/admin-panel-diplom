import { GetOrderDto, getOrderDtoSchema } from "@/AppDtos/Dto/Models/Orders/get-order-dto";
import { CrudService } from "../shared/CrudService";
import { CreateOrderDto, createOrderDtoSchema } from "@/AppDtos/Dto/Models/Orders/create-order-dto";
import { UpdateOrderDto, updateOrderDtoSchema } from "@/AppDtos/Dto/Models/Orders/update-order-dto";

export class OrderService extends CrudService<
    GetOrderDto,
    CreateOrderDto,
    UpdateOrderDto
> {
    public constructor() {
        super(getOrderDtoSchema, createOrderDtoSchema, updateOrderDtoSchema);
    }
}
