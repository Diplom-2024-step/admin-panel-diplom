import { z } from "zod";

export const createPhotoDtoSchema = z.object({
  photo: z.instanceof(File),
  photoableId: z.string(),
});

export type CreatePhotoDto = z.infer<typeof createPhotoDtoSchema>;
