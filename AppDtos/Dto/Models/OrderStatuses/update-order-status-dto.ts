/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */


export const updateOrderStatusDtoSchema = z.object({
    name: z.string().length(64),
    id: z.string().uuid()
});

export type UpdateOrderStatusDto = z.infer<typeof updateOrderStatusDtoSchema>;