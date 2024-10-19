/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const createInHotelDtoSchema = z.object({
    name: z.string().length(128)
});

export type CreateInHotelDto = z.infer<typeof createInHotelDtoSchema>;
