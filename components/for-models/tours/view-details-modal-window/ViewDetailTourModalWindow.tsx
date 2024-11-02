import { GetTourDto } from '@/AppDtos/Dto/Models/Tours/get-tour-dto';
import Carousel from '@/components/shared/Carousel';
import GenerateInputForStandartTypes from '@/components/shared/models-windows/shared/generated-inputs/GenerateInputForStandartTypes';
import ActivityDetails from '@/components/shared/models-windows/specific-details/multiple-details/ActivityDetails';
import CityDetails from '@/components/shared/models-windows/specific-details/single-details/CityDetails';
import HotelDetails from '@/components/shared/models-windows/specific-details/single-details/HotelDetails';
import TransportationTypeDetails from '@/components/shared/models-windows/specific-details/single-details/TransportationTypeDetails';
import { TourService } from '@/service/crudServices/TourService';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';
import { Button } from '@nextui-org/react';
import React from 'react'

const ViewDetailTourModalWindow = (
    {
        isOpen,
        model,
        onClose
    } : {
        isOpen:boolean,
        model:GetTourDto,
        onClose:() => void;
    }
) => {
  return (
     <Modal
            isOpen={isOpen}
            onClose={onClose}
            scrollBehavior='inside' 
            size='2xl'
              >
                <ModalContent>
                    {(innerOnClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Update the hotel</ModalHeader>
                            <ModalBody>
                                <GenerateInputForStandartTypes
                                createScheme={new TourService().getDtoSchema}
                                form={model}
                                onChange={(item:any) =>{}}                                
                                />


                                <TransportationTypeDetails items={[model.transportationType]}                                
                                />

                                <CityDetails items={[model.fromCity]}                                
                                label='from'
                                />

                                <CityDetails items={[model.toCity]}                                
                                label='to'
                                />

                                <HotelDetails
                                items={[model.hotel]}
                                />

                                <HotelDetails
                                    items={[model.hotel]}
                                />
                                
                                {/* <ActivityDetails items={model.Activities}                                
                                /> */}




                                <Carousel
                                images={model.urls}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="warning" variant="light" onPress={innerOnClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
  )
}

export default ViewDetailTourModalWindow