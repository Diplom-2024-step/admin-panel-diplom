import { CrudService } from "@/service/shared/CrudService";
import ButtonForOpenUpdateModalWindowProps from "./ButtonForOpenUpdateModalWindowProps";
import { ModelDto } from "@/AppDtos/Shared/model-dto";
import { ReactElement } from "react";

export default interface ReturnButtonForOpenUpdateWindowFunction<
TGetModelDto extends ModelDto,
TService extends CrudService<TGetModelDto, object, ModelDto> > {
    (model : TGetModelDto, service: TService, setModel: (model: TGetModelDto) => void): ReactElement<ButtonForOpenUpdateModalWindowProps<TGetModelDto, TService>, any>,
    

}