/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { getOrderDtoSchema } from "../Orders/get-order-dto";
import { getUserDtoSchema } from "../../Users/get-user-dto";
import { getOrderStatusDtoSchema } from "../OrderStatuses/get-order-status-dto";import { z } from 'zod';

export const getProcessedOrderDtoSchema = z.object({
    order: getOrderDtoSchema,
    user: getUserDtoSchema,
    status: getOrderStatusDtoSchema,
    id: z.string().uuid()
});

export type GetProcessedOrderDto = z.infer<typeof getProcessedOrderDtoSchema>;
