/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';

export const updateCityDtoSchema = z.object({
    countryId: z.string().uuid(),
    name: z.string().max(128),
    latitud: z.number(),
    longitud: z.number(),
    id: z.string().uuid()
});

export type UpdateCityDto = z.infer<typeof updateCityDtoSchema>;
