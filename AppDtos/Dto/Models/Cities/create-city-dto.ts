/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';

export const createCityDtoSchema = z.object({
    countryId: z.string().default(''),
    name: z.string().max(128).default(''),
    latitud: z.number().default(0),
    longitud: z.number().default(0)
});

export type CreateCityDto = z.infer<typeof createCityDtoSchema>;
