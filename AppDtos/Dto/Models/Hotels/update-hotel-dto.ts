/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';

export const updateHotelDtoSchema = z.object({
    cityId: z.string().uuid(),
    inHotelIds: z.array(z.string().uuid()),
    forSportIds: z.array(z.string().uuid()),
    beachTypesIds: z.array(z.string().uuid()),
    roomTypeIds: z.array(z.string().uuid()),
    forKidIds: z.array(z.string().uuid()),
    inRoomIds: z.array(z.string().uuid()),
    dietTypeIds: z.array(z.string().uuid()),
    name: z.string().max(128),
    description: z.string().max(4096),
    stars: z.number().int().min(1).max(5),
    howManyRooms: z.number().int().min(0).max(2147483647),
    descriptionLocation: z.string().max(1024),
    descriptionForKids: z.string().max(1024),
    descriptionForSports: z.string().max(1024),
    descriptionForInHotels: z.string().max(1024),
    descriptionForBeachTypes: z.string().max(1024),
    turpravdaScore: z.number().int().min(-2147483648).max(2147483647).min(0).max(10).nullish(),
    turpravdaId: z.number().int().min(-9223372036854775808).max(9223372036854775807).min(0).max(9.223372036854776E+18).nullish(),
    latitud: z.number(),
    longitud: z.number(),
    adress: z.string().max(512),
    PricePerNight: z.number().int().min(0).max(1000000).default(100),
    AdditionCostPerPerson: z.number().int().min(0).max(1000000).default(100),
    id: z.string().uuid()
});

export type UpdateHotelDto = z.infer<typeof updateHotelDtoSchema>;
