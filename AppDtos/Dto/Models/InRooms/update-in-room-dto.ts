/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */


export const updateInRoomDtoSchema = z.object({
    name: z.string().length(128),
    id: z.string().uuid()
});

export type UpdateInRoomDto = z.infer<typeof updateInRoomDtoSchema>;