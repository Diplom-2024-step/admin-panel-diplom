"use client"
import { GetCountryDto } from '@/AppDtos/Dto/Models/Countries/get-country-dto'
import { GetCityDto } from '@/AppDtos/Dto/Models/Tours/get-city-dto'
import { ReturnPageDto } from '@/AppDtos/Shared/return-page-dto'
import { useAuthService } from '@/hooks/auth'
import useDebounceState from '@/hooks/useDebounceState'
import useGetPageOfItems from '@/hooks/useGetPageOfItems'
import { LoadingState, SortDescriptor } from "@react-types/shared";
import { CityService } from '@/service/crudServices/CityService'
import OnChangeFunctionProps from '@/types/model-windows/specific-inputs/OnChangeFunctionProps'
import { Icon } from '@iconify-icon/react'
import React, { useEffect, useState } from 'react'
import { Select, SelectedItems, SelectItem, SharedSelection } from '@nextui-org/react'
import LoadingCircle from '@/components/shared/skeletons/LoadingCircle'
import { FilterDto } from '@/AppDtos/Shared/filter-dto'

const SelectCityFromCountry = (
    {
        countryId,
        cityId,
        setCity,
    }: {
        countryId: string,
        cityId: string,
        setCity: OnChangeFunctionProps,
    }
) => {

    const renderFunction = (item: GetCityDto) => {
        return (
            <div className="flex items-center">
                <Icon icon={item.country.icon} className="mr-2" />
                <span>{item.name}</span>
            </div>

        );
    }

    const [perPage, setPerPage] = useState("50");
    const page = "1";

    const service = new CityService();

    const status = useAuthService(service);

    const [perPageState, setPerPageState] = useDebounceState(perPage, setPerPage, 500);
    const [items, setItems] = useState<ReturnPageDto<GetCityDto>>();
    const [loadingState, setLoadingState] = useState<LoadingState>("loading");
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();
    const [error, setError] = useState<string>();
    const [perPageError, setPerPageError] = useState<string>();
    const [filters, setFilters] = useState<FilterDto[][]>([
        [
            {
                column: "Country.Id",
                searchTerm: countryId,
                filterType: "Strict",
                negate: false
            }
        ]
    ] 
);


    const loadItems = useGetPageOfItems<
        GetCityDto,
        CityService
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
        setFilters([
        [
            {
                column: "Country.Id",
                searchTerm: countryId,
                filterType: "Strict",
                negate: false
            }
        ]
    ]);
        loadItems().then();
    }, [loadItems, countryId]);


    const innerOnSelectionChanged = (keys: SharedSelection) => {
        var arrayKeys = [...keys];

        setCity({
            target: {
                value: arrayKeys[0],
                name: "CityId",
            }
        } as any,
            "string");

    };




    return (
        <>
            {
                error === undefined ?
                    loadingState === "loading" ? <LoadingCircle /> :
                        <Select
                            required={true}
                            items={items?.models}
                            label={"select city"}
                            placeholder={"select city"}
                            onSelectionChange={innerOnSelectionChanged}
                            selectedKeys={[cityId]}
                            renderValue={(items: SelectedItems<GetCityDto>) => {
                                return items.map((item) => renderFunction(item.data as GetCityDto));
                            }}
                        >
                            {(item) => (
                                <SelectItem key={
                                    item.id
                                }>
                                    {renderFunction(item as GetCityDto)}
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

export default SelectCityFromCountry