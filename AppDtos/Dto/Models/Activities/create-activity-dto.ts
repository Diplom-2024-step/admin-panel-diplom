/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */


export const createActivityDtoSchema = z.object({
    name: z.string().length(128),
    description: z.string().length(4096)
});

export type CreateActivityDto = z.infer<typeof createActivityDtoSchema>;