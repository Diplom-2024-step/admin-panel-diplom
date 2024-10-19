/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { getTourDtoSchema } from "../Tours/get-tour-dto";
import { getUserDtoSchema } from "../../Users/get-user-dto";
import { getOrderStatusDtoSchema } from "../OrderStatuses/get-order-status-dto";import { z } from 'zod';

export const getOrderDtoSchema = z.object({
    tour: getTourDtoSchema,
    priceUSD: z.number().int(),
    startDate: z.date(),
    endDate: z.date(),
    mobilePhoneNumber: z.string(),
    fullName: z.string(),
    user: getUserDtoSchema.nullish(),
    admin: getUserDtoSchema.nullish(),
    orderStatus: getOrderStatusDtoSchema,
    id: z.string().uuid()
});

export type GetOrderDto = z.infer<typeof getOrderDtoSchema>;
