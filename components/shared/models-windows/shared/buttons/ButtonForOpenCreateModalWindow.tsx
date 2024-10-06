import { ModelDto } from '@/AppDtos/Shared/model-dto'
import { CrudService } from '@/service/shared/CrudService'
import { Button } from '@nextui-org/react'
import React, { useState } from 'react'

const ButtonForOpenCreateModalWindow = <
  Service extends CrudService<ModelDto, object, ModelDto>>({
    service
  }: {
    service: Service
  }) => {

      const [isModalOpen, setIsModalOpen] = useState(false);


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
  return (
    <>
      <Button
        color='secondary'
      >
        Create a new model
      </Button>
      
    </>
  )
}

export default ButtonForOpenCreateModalWindow