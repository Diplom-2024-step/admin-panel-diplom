/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';

export const createCountryDtoSchema = z.object({
    name: z.string().max(128).default('name'),
    icon: z.string().max(2048).default('icon'),
});

export type CreateCountryDto = z.infer<typeof createCountryDtoSchema>;
