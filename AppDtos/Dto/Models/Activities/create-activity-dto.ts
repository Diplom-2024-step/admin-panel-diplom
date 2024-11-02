/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';

export const createActivityDtoSchema = z.object({
    countryId: z.string().default(''),
    name: z.string().max(128).default(''),
    description: z.string().max(4096).default(''),
    price: z.number().min(0).max(10000).default(100)
});

export type CreateActivityDto = z.infer<typeof createActivityDtoSchema>;
