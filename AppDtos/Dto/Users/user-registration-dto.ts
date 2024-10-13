/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */


export const userRegistrationDtoSchema = z.object({
    userName: z.string().length(128).regex(/\S/),
    email: z.string().email().regex(/\S/),
    password: z.string().regex(/\S/).regex(/^.{6,}$/),
    role: z.string().regex(/\S/)
});

export type UserRegistrationDto = z.infer<typeof userRegistrationDtoSchema>;