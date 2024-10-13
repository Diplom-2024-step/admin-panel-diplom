import { GetOrderStatusDto, getOrderStatusDtoSchema } from "@/AppDtos/Dto/Models/OrderStatuses/get-order-status-dto";
import { CrudService } from "../shared/CrudService";
import { CreateOrderStatusDto, createOrderStatusDtoSchema } from "@/AppDtos/Dto/Models/OrderStatuses/create-order-status-dto";
import { UpdateOrderStatusDto, updateOrderStatusDtoSchema } from "@/AppDtos/Dto/Models/OrderStatuses/update-order-status-dto";

export class OrderStatusService extends CrudService<
    GetOrderStatusDto,
    CreateOrderStatusDto,
    UpdateOrderStatusDto
> {
    public constructor() {
        super(getOrderStatusDtoSchema, createOrderStatusDtoSchema, updateOrderStatusDtoSchema);
    }
}
