import { ReactElement } from "react";
import OnChangeFunctionProps from "./OnChangeFunctionProps";
import ButtonForOpenCreateModalWindowProps from "../buttons/create-buttons/ButtonForOpenCreateModalWindowProps";
import { CrudService } from "@/service/shared/CrudService";
import { ModelDto } from "@/AppDtos/Shared/model-dto";


export default interface FunctionForReturningSpecificInput<TGetModelDto extends ModelDto > {
  (onChange:OnChangeFunctionProps, currectValue: any): ReactElement<ButtonForOpenCreateModalWindowProps<CrudService<TGetModelDto, object, ModelDto>>, any>;
}