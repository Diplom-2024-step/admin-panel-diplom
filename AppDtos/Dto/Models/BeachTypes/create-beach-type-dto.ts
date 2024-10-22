/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';

export const createBeachTypeDtoSchema = z.object({
    name: z.string().max(128).default('')
});

export type CreateBeachTypeDto = z.infer<typeof createBeachTypeDtoSchema>;
