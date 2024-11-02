"use client"
import { GetActivityDto } from '@/AppDtos/Dto/Models/Activities/get-activity-dto';
import { FilterDto } from '@/AppDtos/Shared/filter-dto';
import { ReturnPageDto } from '@/AppDtos/Shared/return-page-dto';
import LoadingCircle from '@/components/shared/skeletons/LoadingCircle';
import { useAuthService } from '@/hooks/auth';
import useDebounceState from '@/hooks/useDebounceState';
import useGetPageOfItems from '@/hooks/useGetPageOfItems';
import { ActivityService } from '@/service/crudServices/ActivityService';
import OnChangeFunctionProps from '@/types/model-windows/specific-inputs/OnChangeFunctionProps';
import { Select, SelectedItems, SelectItem, SharedSelection } from '@nextui-org/react';
import { LoadingState, SortDescriptor } from "@react-types/shared";
import React, { useEffect, useState } from 'react'

const ActivityInputFromCountry = (
    {
        countryId,
        activityIds,
        setActivities,
    }: {
        countryId: string,
        activityIds: string[],
        setActivities: OnChangeFunctionProps,
    }
) => {

    const renderFunction = (item: GetActivityDto) => {
        return (
            <div className="flex items-center">
                <span>{item.name}</span>
            </div>

        );
    }

    const [perPage, setPerPage] = useState("50");
    const page = "1";

    const service = new ActivityService();

    const status = useAuthService(service);

    const [perPageState, setPerPageState] = useDebounceState(perPage, setPerPage, 500);
    const [items, setItems] = useState<ReturnPageDto<GetActivityDto>>();
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
        GetActivityDto,
        ActivityService
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

        setActivities({
            target: {
                value: arrayKeys,
                name: "activityIds",
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
                            label={"select activities"}
                            placeholder={"select activities"}
                            onSelectionChange={innerOnSelectionChanged}
                            selectedKeys={activityIds}
                            renderValue={(items: SelectedItems<GetActivityDto>) => {
                                return items.map((item) => renderFunction(item.data as GetActivityDto));
                            }}
                        >
                            {(item) => (
                                <SelectItem key={
                                    item.id
                                }>
                                    {renderFunction(item as GetActivityDto)}
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

export default ActivityInputFromCountry

