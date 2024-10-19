import { ModelDto } from "@/AppDtos/Shared/model-dto";
import { CrudService } from "@/service/shared/CrudService";
import FunctionForReturningSpecificInput from "../../specific-inputs/FunctionForReturningSpecificInput";

export default interface ButtonForOpenUpdateModalWindowProps<
  TGetModelDto extends ModelDto,
  Service extends CrudService<TGetModelDto, object, ModelDto>
> {
  model: TGetModelDto;
  service: Service;
  setModel: (model: TGetModelDto) => void;
  specificInputMap :Map<string, FunctionForReturningSpecificInput<ModelDto>>
  specificUpdateMap: Map<string, (innerSetState: React.SetStateAction<any>, object:TGetModelDto) => void>
}
