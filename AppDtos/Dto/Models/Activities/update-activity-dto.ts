/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const updateActivityDtoSchema = z.object({
    name: z.string().length(128),
    description: z.string().length(4096),
    id: z.string().uuid()
});

export type UpdateActivityDto = z.infer<typeof updateActivityDtoSchema>;
