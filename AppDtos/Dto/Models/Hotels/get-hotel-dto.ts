/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { getCityDtoSchema } from "./get-city-dto";
import { getInHotelDtoSchema } from "../InHotels/get-in-hotel-dto";
import { getForSportDtoSchema } from "../ForSports/get-for-sport-dto";
import { getBeachTypeDtoSchema } from "../BeachTypes/get-beach-type-dto";
import { getRoomTypeDtoSchema } from "../RoomTypes/get-room-type-dto";
import { z } from 'zod';
import { getForKidsDtoSchema } from "../ForKids/get-for-kids-dto";
import { getInRoomDtoSchema } from "../InRooms/get-in-room-dto";
import { getDietTypeDtoSchema } from "../DietTypes/get-diet-type-dto";

export const getHotelDtoSchema = z.object({
    city: getCityDtoSchema,
    inHotels: z.array(getInHotelDtoSchema),
    forSports: z.array(getForSportDtoSchema),
    beachTypes: z.array(getBeachTypeDtoSchema),
    roomTypes: z.array(getRoomTypeDtoSchema),
    forKids: z.array(getForKidsDtoSchema),
    inRooms: z.array(getInRoomDtoSchema),
    dietTypes: z.array(getDietTypeDtoSchema),
    name: z.string(),
    description: z.string(),
    stars: z.number().int(),
    howManyRooms: z.number().int(),
    descriptionLocation: z.string(),
    descriptionForKids: z.string(),
    descriptionForSports: z.string(),
    descriptionForInHotels: z.string(),
    descriptionForBeachTypes: z.string(),
    turpravdaScore: z.number().int().min(-2147483648).max(2147483647).nullish(),
    turpravdaId: z.number().int().min(-9223372036854775808).max(9223372036854775807).nullish(),
    latitud: z.number(),
    longitud: z.number(),
    adress: z.string(),
    urls: z.array(z.string()),
    id: z.string().uuid(),
    PricePerNight: z.number(),
    AdditionCostPerPerson: z.number(),
});

export type GetHotelDto = z.infer<typeof getHotelDtoSchema>;
