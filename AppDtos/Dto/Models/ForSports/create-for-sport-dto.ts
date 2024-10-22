/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';

export const createForSportDtoSchema = z.object({
    name: z.string().max(128).default('')
});

export type CreateForSportDto = z.infer<typeof createForSportDtoSchema>;
