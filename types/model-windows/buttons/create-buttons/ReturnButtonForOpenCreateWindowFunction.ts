import { CrudService } from "@/service/shared/CrudService";
 import ButtonForOpenCreateModalWindowProps from "./ButtonForOpenCreateModalWindowProps";
import { ModelDto } from "@/AppDtos/Shared/model-dto";
import { ReactElement } from "react";

export default interface ReturnButtonForOpenCreateWindowFunction<TService extends CrudService<ModelDto, object, ModelDto> > {
  (service: TService): ReactElement<ButtonForOpenCreateModalWindowProps<TService>, any>;
}