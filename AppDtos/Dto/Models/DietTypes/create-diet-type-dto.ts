/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */


export const createDietTypeDtoSchema = z.object({
    name: z.string().length(64)
});

export type CreateDietTypeDto = z.infer<typeof createDietTypeDtoSchema>;