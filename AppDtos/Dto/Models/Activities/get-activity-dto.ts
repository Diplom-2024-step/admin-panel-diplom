/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const getActivityDtoSchema = z.object({
    name: z.string(),
    description: z.string(),
    urls: z.array(z.string()),
    id: z.string().uuid()
});

export type GetActivityDto = z.infer<typeof getActivityDtoSchema>;
