/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from "zod";

export const createRoomTypeDtoSchema = z.object({
  name: z.string().max(64).default(""),
  price: z.number().min(0).max(1000).default(10)
});

export type CreateRoomTypeDto = z.infer<typeof createRoomTypeDtoSchema>;
