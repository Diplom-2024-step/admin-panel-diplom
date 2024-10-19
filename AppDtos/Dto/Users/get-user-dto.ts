/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const getUserDtoSchema = z.object({
    email: z.string(),
    roles: z.array(z.string()),
    userName: z.string(),
    id: z.string().uuid()
});

export type GetUserDto = z.infer<typeof getUserDtoSchema>;
