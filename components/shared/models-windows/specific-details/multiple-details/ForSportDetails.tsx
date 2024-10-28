import { GetForSportDto } from "@/AppDtos/Dto/Models/ForSports/get-for-sport-dto";
import { Chip } from "@nextui-org/react";
import SharedMultipleDetail from "../shared/SharedMultipleDetail";

const ForSportDetails = (
{
    items
}
: 
{
    items: GetForSportDto[]
}
) => {
 const renderFunction = (item:GetForSportDto) => 
        {
            return (
            <Chip key={item.id} className='mr-2'>{item.name}</Chip>
                
            );
        }


  return (
    <SharedMultipleDetail<GetForSportDto>
     items={items}
      renderFunction={renderFunction}
    onSelectRenderFunction={renderFunction }
     label={'For sport'}    
    
    />
  )
}

export default ForSportDetails