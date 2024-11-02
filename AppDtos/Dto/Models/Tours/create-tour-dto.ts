/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';

export const createTourDtoSchema = z.object({
    name: z.string().max(128).default(''),
    hotelId: z.string().default(''),
    fromCityId: z.string().default(''),
    toCityId: z.string().default(''),
    priceUSD: z.number().int().default(100),
    description: z.string().max(4096).default(''),
    duration: z.number().int().min(3).max(90).default(5),
    transportationTypeId: z.string().default(''),
    roomTypeId: z.string().default(''),
    dietTypeId: z.string().default(''),
    howManyAdults: z.number().int().min(0).max(10).default(1),
    howManyKids: z.number().int().min(0).max(10).default(1),
    activityIds: z.array(z.string().uuid()).default([])
});

export type CreateTourDto = z.infer<typeof createTourDtoSchema>;
