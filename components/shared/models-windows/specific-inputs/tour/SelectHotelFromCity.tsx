"use client"
import { LoadingState, SortDescriptor } from "@react-types/shared";
import { GetHotelDto } from '@/AppDtos/Dto/Models/Hotels/get-hotel-dto'
import { ReturnPageDto } from '@/AppDtos/Shared/return-page-dto'
import { useAuthService } from '@/hooks/auth'
import useDebounceState from '@/hooks/useDebounceState'
import { HotelService } from '@/service/crudServices/HotelService'
import OnChangeFunctionProps from '@/types/model-windows/specific-inputs/OnChangeFunctionProps'
import { Icon } from '@iconify-icon/react'
import React, { useEffect, useState } from 'react'
import { FilterDto } from "@/AppDtos/Shared/filter-dto";
import useGetPageOfItems from "@/hooks/useGetPageOfItems";
import { GetCityDto } from "@/AppDtos/Dto/Models/Hotels/get-city-dto";
import { Select, SelectedItems, SelectItem, SharedSelection } from "@nextui-org/react";
import LoadingCircle from "@/components/shared/skeletons/LoadingCircle";

const SelectHotelFromCity = (
  {
        cityId,
        setHotel,
    }: {
        cityId: string,
        setHotel: OnChangeFunctionProps
    }

) => {
   const renderFunction = (item: GetHotelDto) => {
        return (
            <div className="flex items-center">
                <Icon icon={item.city.country.icon} className="mr-2" />
                <span>{item.name}</span>
            </div>

        );
    }

    const [perPage, setPerPage] = useState("50");
    const page = "1";

    const service = new HotelService();

    const status = useAuthService(service);
    const [value, setValue] = useState<string>("");

    const [perPageState, setPerPageState] = useDebounceState(perPage, setPerPage, 500);
    const [items, setItems] = useState<ReturnPageDto<GetHotelDto>>();
    const [loadingState, setLoadingState] = useState<LoadingState>("loading");
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();
    const [error, setError] = useState<string>();
    const [perPageError, setPerPageError] = useState<string>();


    const filters : FilterDto[][] = [
        [
            {
                column: "City.Id",
                searchTerm: cityId,
                filterType: "Strict",
                negate: false
            }
        ]
    ] 


    const loadItems = useGetPageOfItems<
        GetHotelDto,
        HotelService
    >(
        service,
        "50",
        "1",
        sortDescriptor,
        setLoadingState,
        setError,
        setPerPage,
        setItems,
        status,
        filters
    );

    useEffect(() => {
        loadItems().then();
    }, [loadItems, cityId]);


    const innerOnSelectionChanged = (keys: SharedSelection) => {
        var arrayKeys = [...keys];

        const hotel = items?.models.filter(e => e.id == arrayKeys[0])[0];

        setHotel({
            target: {
                value: hotel,
                name: "hotelId",
            }
        } as any,
            "GetHotelDto");

            setValue(arrayKeys[0] as any);
    };




    return (
        <>
            {
                error === undefined ?
                    loadingState === "loading" ? <LoadingCircle /> :
                        <Select
                            required={true}
                            items={items?.models}
                            label={"select hotel"}
                            placeholder={"select hotel"}
                            onSelectionChange={innerOnSelectionChanged}
                            selectedKeys={[value]}
                            renderValue={(items: SelectedItems<GetHotelDto>) => {
                                return items.map((item) => renderFunction(item.data as GetHotelDto));
                            }}
                        >
                            {(item) => (
                                <SelectItem key={
                                    item.id
                                }>
                                    {renderFunction(item as GetHotelDto)}
                                </SelectItem>
                            )
                            }
                        </Select>
                    :
                    <p className="text-red-700">
                        {error}
                    </p>
            }
        </>
    );
}

export default SelectHotelFromCity