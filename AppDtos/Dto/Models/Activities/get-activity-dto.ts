/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';
import { getCountryDtoSchema } from '../Countries/get-country-dto';

export const getActivityDtoSchema = z.object({
    name: z.string(),
    description: z.string(),
    country: getCountryDtoSchema,
    price: z.number(),
    id: z.string().uuid(),
    urls: z.array(z.string()),
});

export type GetActivityDto = z.infer<typeof getActivityDtoSchema>;
