/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from "zod";

export const updateRoomTypeDtoSchema = z.object({
  name: z.string().max(64),
  id: z.string().uuid(),
});

export type UpdateRoomTypeDto = z.infer<typeof updateRoomTypeDtoSchema>;
