/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */


export const createReviewDtoSchema = z.object({
    body: z.string().length(4096),
    score: z.number().int().min(0).max(10),
    reviewablePhotoableId: z.string().uuid()
});

export type CreateReviewDto = z.infer<typeof createReviewDtoSchema>;