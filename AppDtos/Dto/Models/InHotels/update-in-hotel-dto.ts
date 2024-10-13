/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const updateInHotelDtoSchema = z.object({
    name: z.string().length(128),
    id: z.string().uuid()
});

export type UpdateInHotelDto = z.infer<typeof updateInHotelDtoSchema>;
