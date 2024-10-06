import { ModelDto } from '@/AppDtos/Shared/model-dto'
import { CrudService } from '@/service/shared/CrudService'
import React from 'react'

const CreateModelWindow = <
    Service extends CrudService<ModelDto, object, ModelDto>>(
        {
            isOpen,
            onClose,
            service,
        }: {
            isOpen: boolean,
            onClose: () => void,
            service: Service,
        }) => {

    

    
  return (
    <div>
        CreateModelWindow
        </div>
  )
}

export default CreateModelWindow