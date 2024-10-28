"use client"
import { GetCountryDto } from "@/AppDtos/Dto/Models/Countries/get-country-dto";
import { ReturnPageDto } from "@/AppDtos/Shared/return-page-dto";
import { useAuthService } from "@/hooks/auth";
import { CountryService } from "@/service/crudServices/CountryService";
import SpecificInput from "@/types/model-windows/specific-inputs/SpecificInput";
import { useCallback, useEffect, useState } from "react";
import { LoadingState, SortDescriptor } from "@react-types/shared";
import { ZodError } from "zod";
import { toTitleCase } from "@/utils/TextUtils";
import LoadingCircle from "../../../skeletons/LoadingCircle";
import { Select, SelectedItems, SelectItem } from "@nextui-org/select";
import { Icon } from "@iconify-icon/react";
import { SharedSelection } from "@nextui-org/react";
import useGetPageOfItems from "@/hooks/useGetPageOfItems";
import useDebounceState from "@/hooks/useDebounceState";
import SharedSingleInput from "../shared/SharedSingleInput";

// const CountryInput: SpecificInput = ({
//   onChange,
//   currectValue
// }) => {
//   let service = new CountryService();

//   const [perPage, setPerPage] = useState("50");
//   const page = "1";

//   const status = useAuthService(service);
//   const [value, setValue] = useState<string>("");

//   const [perPageState, setPerPageState] = useDebounceState(perPage, setPerPage, 500);
//   const [items, setItems] = useState<ReturnPageDto<GetCountryDto>>();
//   const [loadingState, setLoadingState] = useState<LoadingState>("loading");
//   const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();
//   const [error, setError] = useState<string>();
//   const [perPageError, setPerPageError] = useState<string>();


//   const loadItems = useGetPageOfItems<
//     GetCountryDto,
//     typeof service
//   >(
//     service,
//     "50",
//     "1",
//     sortDescriptor,
//     setLoadingState,
//     setError,
//     setPerPage,
//     setItems,
//     status
//   );

//   useEffect(() => {
//     loadItems().then();
//   }, [loadItems]);


//   const innerOnSelectionChanged = (keys: SharedSelection) => {
//     var arrayKeys = [...keys];


//     onChange({
//       target: {
//         value: arrayKeys[0],
//         name: "countryId",
//       }
//     } as any,
//   "string");
//   };




//   return (
//     <>
//       {
//         error === undefined ?
//         loadingState === "loading" ? <LoadingCircle /> :
//           <Select
//             required={true}
//             className="max-w-xs"
//             items={items?.models}
//             defaultSelectedKeys={[currectValue]}
//             label="Select the country"
//             placeholder="Select the country"
//             onSelectionChange={innerOnSelectionChanged}
//             selectedKeys={[currectValue]}
//                   renderValue={(items: SelectedItems<GetCountryDto>) => {
//         return items.map((item) => (
//           <div key={item.key} className="flex items-center gap-2">
//             <div className="flex items-center">
//                   <Icon icon={item.data?.icon || ''} className="mr-2" />
//                   <span>{item.data?.name}</span>
//                 </div>
//           </div>
//         ));
//       }}
//           >
//             {(item) => (
//               <SelectItem key={
//                 item.id
//                 }>
//                 <div className="flex items-center">
//                   <Icon icon={item.icon} className="mr-2" />
//                   <span>{item.name}</span>
//                 </div>
//               </SelectItem>
//             )
//             }
//           </Select>
//           :
//           <p className="text-red-700">
//             {error}
//           </p>
//       }
//     </>
//   );
// };



const CountryInput:SpecificInput = (
{
  currectValue,
  onChange
}

) => {

  let countryService = new CountryService();


  const renderFunction = (item:GetCountryDto) =>
    {
      return (
           <div className="flex items-center">
                  <Icon icon={item.icon} className="mr-2" />
                  <span>{item.name}</span>
                </div>

      );
    }


  return (
    <SharedSingleInput
      propertyName='countryId'
      currectValue={currectValue}
      onChange={onChange}
      placeholder='Select a country'
      service={countryService}
      onSelectRenderFunction={renderFunction}
      renderFunction={renderFunction}

    
    
    />
  )
}



export default CountryInput;