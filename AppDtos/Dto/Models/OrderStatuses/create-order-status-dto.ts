/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from "zod";

export const createOrderStatusDtoSchema = z.object({
  name: z.string().max(64).default(""),
});

export type CreateOrderStatusDto = z.infer<typeof createOrderStatusDtoSchema>;
