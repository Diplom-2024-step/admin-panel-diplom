import { ModelDto } from "@/AppDtos/Shared/model-dto";
import { CrudService } from "@/service/shared/CrudService";
import { ReactElement } from "react";
import ReturnButtonForOpenCreateWindowFunction from "./ReturnButtonForOpenCreateWindowFunction";
import FunctionForReturningSpecificInput from "../../specific-inputs/FunctionForReturningSpecificInput";

export default interface ButtonForOpenCreateModalWindowProps<Service extends CrudService<ModelDto, object, ModelDto>> {
  service: Service;
  specificInputMap :Map<string, FunctionForReturningSpecificInput<ModelDto>>
}
