import { z } from "zod";

export const updatePhotoDtoSchema = z.object({
  photo: z.instanceof(File),
  photoableId: z.string(),
  id: z.string().uuid()
});

export type UpdatePhotoDto = z.infer<typeof updatePhotoDtoSchema>;
