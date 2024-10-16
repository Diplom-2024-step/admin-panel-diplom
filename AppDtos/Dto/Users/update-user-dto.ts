/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const updateUserDtoSchema = z.object({
    email: z.string().email().regex(/\S/),
    role: z.string().regex(/\S/),
    userName: z.string().length(128),
    id: z.string().uuid()
});

export type UpdateUserDto = z.infer<typeof updateUserDtoSchema>;
