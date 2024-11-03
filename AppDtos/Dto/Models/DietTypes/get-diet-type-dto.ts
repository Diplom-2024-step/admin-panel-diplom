/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';

export const getDietTypeDtoSchema = z.object({
    name: z.string(),
    id: z.string().uuid(),
    price: z.number()
});

export type GetDietTypeDto = z.infer<typeof getDietTypeDtoSchema>;
