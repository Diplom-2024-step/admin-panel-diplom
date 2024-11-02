/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';

export const updateActivityDtoSchema = z.object({
    name: z.string().max(128),
    description: z.string().max(4096),
    id: z.string().uuid(),
    countryId: z.string().default(''),
});

export type UpdateActivityDto = z.infer<typeof updateActivityDtoSchema>;
