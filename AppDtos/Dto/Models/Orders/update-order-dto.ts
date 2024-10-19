/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const updateOrderDtoSchema = z.object({
    tourId: z.string().uuid(),
    priceUSD: z.number().int().min(0).max(2147483647),
    startDate: z.date(),
    endDate: z.date(),
    mobilePhoneNumber: z.string().length(32),
    fullName: z.string().length(128),
    userId: z.string().uuid().nullish(),
    adminId: z.string().uuid().nullish(),
    orderStatusId: z.string().uuid(),
    id: z.string().uuid()
});

export type UpdateOrderDto = z.infer<typeof updateOrderDtoSchema>;
