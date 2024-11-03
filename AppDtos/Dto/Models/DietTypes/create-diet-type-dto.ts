/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';

export const createDietTypeDtoSchema = z.object({
    name: z.string().max(64).default(''),
    price: z.number().min(0).max(400).default(10)
});

export type CreateDietTypeDto = z.infer<typeof createDietTypeDtoSchema>;
