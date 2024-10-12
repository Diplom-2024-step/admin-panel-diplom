"use client"
import { GetCountryDto } from "@/AppDtos/Dto/Models/Countries/get-country-dto";
import { ReturnPageDto } from "@/AppDtos/Shared/return-page-dto";
import { useAuthService } from "@/hooks/auth";
import { CountryService } from "@/service/crudServices/CountryService";
import SpecificInput from "@/types/model-windows/specific-inputs/SpecificInput";
import { useCallback, useEffect, useState } from "react";
import { LoadingState } from "@react-types/shared";
import { ZodError } from "zod";
import { toTitleCase } from "@/utils/TextUtils";
import LoadingCircle from "../../skeletons/LoadingCircle";
import { Select, SelectedItems, SelectItem } from "@nextui-org/select";
import { Icon } from "@iconify-icon/react";
import { SharedSelection } from "@nextui-org/react";

const CountryInput: SpecificInput = ({
  onChange,
  currectValue
}) => {
  let service = new CountryService();

  const status = useAuthService(service);
  const [value, setValue] = useState<string>("");

  const [items, setItems] = useState<ReturnPageDto<GetCountryDto>>();
  const [loadingState, setLoadingState] = useState<LoadingState>("loading");
  const [error, setError] = useState<string>();
  const [perPageError, setPerPageError] = useState<string>();


  const loadItems = useCallback(async () => {
    setLoadingState("loading");
    setError(undefined);
    setPerPageError(undefined);
    if (status !== "success") {
      setLoadingState(status);
      return;
    }
    try {
      setItems(undefined);
      setItems((await service.getAll({
        pageNumber: 1,
        pageSize: 50,
        filters: [],
        sorts: []
      })));
      setLoadingState("idle");
    } catch (e) {
      if (e instanceof ZodError) {
        setError(Object.entries(e.formErrors.fieldErrors).map(([key, value]) =>
          `\n${toTitleCase(key)}: ${value}`).join(", "));
        if (e.formErrors.fieldErrors.pageSize) setPerPageError(e.formErrors.fieldErrors.pageSize.toString());
      } else if (e instanceof Error)
        setError(e.message);
      else
        setError(`${e}`);
      setLoadingState("error");
    }
  }, []);

  useEffect(() => {
    loadItems().then();
  }, [loadItems]);


  const innerOnSelectionChanged = (keys: SharedSelection) => {
    var arrayKeys = [...keys];

    console.debug(arrayKeys[0].toString());
    setValue(arrayKeys[0].toString());


    onChange({
      target: {
        value: arrayKeys[0],
        name: "countryId",
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
            className="max-w-xs"
            items={items?.models}
            defaultSelectedKeys={[value]}
            label="Select the country"
            placeholder="Select the country"
            onSelectionChange={innerOnSelectionChanged}
            selectedKeys={[value]}
                  renderValue={(items: SelectedItems<GetCountryDto>) => {
        return items.map((item) => (
          <div key={item.key} className="flex items-center gap-2">
            <div className="flex items-center">
                  <Icon icon={item.data?.icon || ''} className="mr-2" />
                  <span>{item.data?.name}</span>
                </div>
          </div>
        ));
      }}
          >
            {(item) => (
              <SelectItem key={
                item.id
                }>
                <div className="flex items-center">
                  <Icon icon={item.icon} className="mr-2" />
                  <span>{item.name}</span>
                </div>
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
};


export default CountryInput