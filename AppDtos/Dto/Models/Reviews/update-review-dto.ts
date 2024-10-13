/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const updateReviewDtoSchema = z.object({
    body: z.string().length(4096),
    score: z.number().int().min(0).max(10),
    reviewablePhotoableId: z.string().uuid(),
    id: z.string().uuid()
});

export type UpdateReviewDto = z.infer<typeof updateReviewDtoSchema>;
