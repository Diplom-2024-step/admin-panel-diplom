import { ModelDto } from "@/AppDtos/Shared/model-dto";
import RenderFunction from "@/types/table/RenderFunction";


export default interface ButtonForOpenViewDetailModalWindowProps<TGetModelDto extends ModelDto,
> {
   model:TGetModelDto,
   specificRenderMap :Map<string, RenderFunction>
}
