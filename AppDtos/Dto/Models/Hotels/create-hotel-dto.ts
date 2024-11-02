/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';

export const createHotelDtoSchema = z.object({
    cityId: z.string().default(''),
    inHotelIds: z.array(z.string().uuid()).default([]),
    forSportIds: z.array(z.string().uuid()).default([]),
    beachTypeIds: z.array(z.string().uuid()).default([]),
    forKidIds: z.array(z.string().uuid()).default([]),
    roomTypeIds: z.array(z.string().uuid()).default([]),
    inRoomIds: z.array(z.string().uuid()).default([]),
    dietTypeIds: z.array(z.string().uuid()).default([]),
    name: z.string().max(128).default(''),
    description: z.string().max(4096).default(''),
    stars: z.number().int().min(1).max(5).default(1),
    howManyRooms: z.number().int().min(0).max(2147483647).default(1),
    descriptionLocation: z.string().max(1024).default(''),
    descriptionForKids: z.string().max(1024).default(''),
    descriptionForSports: z.string().max(1024).default(''),
    descriptionForInHotels: z.string().max(1024).default(''),
    descriptionForBeachTypes: z.string().max(1024).default(''),
    turpravdaScore: z.number().int().min(-2147483648).max(2147483647).min(0).max(10).nullish().default(null),
    turpravdaId: z.number().int().min(-9223372036854775808).max(9223372036854775807).min(0).max(9.223372036854776E+18).nullish().default(null),
    latitud: z.number().default(0),
    longitud: z.number().default(0),
    adress: z.string().max(512).default(''),
    PricePerNight: z.number().int().min(0).max(1000000).default(100),
    AdditionCostPerPerson: z.number().int().min(0).max(1000000).default(100),
    WebSiteUrl: z.string().max(2048).default('')
});

export type CreateHotelDto = z.infer<typeof createHotelDtoSchema>;
