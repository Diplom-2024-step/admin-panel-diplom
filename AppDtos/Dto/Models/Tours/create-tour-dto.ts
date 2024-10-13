/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const createTourDtoSchema = z.object({
    name: z.string().length(128),
    hotelId: z.string().uuid(),
    sartDate: z.date(),
    endDate: z.date(),
    fromCityId: z.string().uuid(),
    toCityId: z.string().uuid(),
    priceUSD: z.number().int(),
    description: z.string().length(4096),
    duration: z.number().int().min(3).max(90),
    transportationTypeId: z.string().uuid(),
    roomTypeId: z.string().uuid(),
    dietTypeId: z.string().uuid(),
    howManyAdults: z.number().int().min(0).max(10),
    howManyKids: z.number().int().min(0).max(10),
    userIds: z.array(z.string().uuid())
});

export type CreateTourDto = z.infer<typeof createTourDtoSchema>;
