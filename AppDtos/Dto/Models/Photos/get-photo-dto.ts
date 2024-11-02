import { z } from "zod";

export const getPhotoDtoSchema = z.object({

  id: z.string().uuid(),
  url: z.string(),
  width: z.number(),
  height: z.number(),
});

export type GetPhotoDto = z.infer<typeof getPhotoDtoSchema>;
