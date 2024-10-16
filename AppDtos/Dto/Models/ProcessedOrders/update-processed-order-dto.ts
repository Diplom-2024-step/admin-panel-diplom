/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const updateProcessedOrderDtoSchema = z.object({
    orderId: z.string().uuid(),
    userId: z.string().uuid(),
    statusId: z.string().uuid(),
    id: z.string().uuid()
});

export type UpdateProcessedOrderDto = z.infer<typeof updateProcessedOrderDtoSchema>;
