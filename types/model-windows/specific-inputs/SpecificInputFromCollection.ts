import { ModelDto } from "@/AppDtos/Shared/model-dto";
import OnChangeFunctionProps from "@/types/model-windows/specific-inputs/OnChangeFunctionProps"

interface SpecificInputPropsFromColletion {
  onChange: OnChangeFunctionProps;
  currectValue: any;
  items: any[]
  propertyName?: string;
  placeHolder?: string;



}

export default interface SpecificInput extends React.FC<SpecificInputPropsFromColletion> {}


