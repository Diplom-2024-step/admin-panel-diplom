/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';

export const createInHotelDtoSchema = z.object({
    name: z.string().max(128).default('')
});

export type CreateInHotelDto = z.infer<typeof createInHotelDtoSchema>;
