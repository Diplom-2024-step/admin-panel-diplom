import { ModelDto } from '@/AppDtos/Shared/model-dto'
import RenderFunction from '@/types/table/RenderFunction'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal'
import { Button } from '@nextui-org/react'
import React from 'react'
import GenerateViewDetailsForGetDto from '../generated-inputs/GenerateViewDetailsForGetDto'

const ViewDetailsWindow = <TGetModelDto extends ModelDto>({
  model,
  specificRenderMap,
  isOpen,
  onClose
}
  :
  {
    model: TGetModelDto,
    specificRenderMap: Map<string, RenderFunction>,
    isOpen: boolean,
    onClose: () => void,
  }
) => {


  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalContent>
        <ModalHeader className='flex-col gap-1 flex'>View details</ModalHeader>

        <ModalBody>
          {
            <GenerateViewDetailsForGetDto
              model={model}
              specificRenderMap={specificRenderMap}
            />
          }


        </ModalBody>
        <ModalFooter>
          <Button color="warning" variant="light" onPress={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>


    </Modal>
  )
}

export default ViewDetailsWindow