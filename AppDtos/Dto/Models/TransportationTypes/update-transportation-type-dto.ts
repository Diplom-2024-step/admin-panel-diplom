/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const updateTransportationTypeDtoSchema = z.object({
    name: z.string().length(64),
    id: z.string().uuid()
});

export type UpdateTransportationTypeDto = z.infer<typeof updateTransportationTypeDtoSchema>;
