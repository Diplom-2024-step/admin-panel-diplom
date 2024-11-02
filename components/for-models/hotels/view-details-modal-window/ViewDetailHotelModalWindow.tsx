import { GetHotelDto } from '@/AppDtos/Dto/Models/Hotels/get-hotel-dto'
import GenerateInputForStandartTypes from '@/components/shared/models-windows/shared/generated-inputs/GenerateInputForStandartTypes';
import BeachTypesDetails from '@/components/shared/models-windows/specific-details/multiple-details/BeachTypesDetails';
import DietTypesDetails from '@/components/shared/models-windows/specific-details/multiple-details/DietTypesDetails';
import ForKidsDetails from '@/components/shared/models-windows/specific-details/multiple-details/ForKidsDetails';
import ForSportDetails from '@/components/shared/models-windows/specific-details/multiple-details/ForSportDetails';
import InHotelDetails from '@/components/shared/models-windows/specific-details/multiple-details/InHotelDetails';
import InRoomDetails from '@/components/shared/models-windows/specific-details/multiple-details/InRoomDetails';
import RoomTypeDetails from '@/components/shared/models-windows/specific-details/multiple-details/RoomTypeDetails';
import DietTypeInput from '@/components/shared/models-windows/specific-inputs/multipleInputs/DietTypeInput';
import { HotelService } from '@/service/crudServices/HotelService';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';
import {Image} from "@nextui-org/image";
import { Button } from '@nextui-org/react';
import React from 'react'
import Carousel from '@/components/shared/Carousel';
import TransportationTypeDetails from '@/components/shared/models-windows/specific-details/single-details/TransportationTypeDetails';

const ViewDetailHotelModalWindow = (
    {
        isOpen,
        model,
        onClose
    } : {
        isOpen:boolean,
        model:GetHotelDto,
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
                                createScheme={new HotelService().getDtoSchema}
                                form={model}
                                onChange={(item:any) =>{}}                                
                                />


                                <BeachTypesDetails items={model.beachTypes}                                
                                />

                                <DietTypesDetails
                                items={model.dietTypes}
                                />

                                <ForKidsDetails
                                items={model.forKids}
                                />

                                <ForSportDetails items={model.forSports}                                
                                />

                                <InHotelDetails
                                items={model.inHotels}
                                />

                                <InRoomDetails
                                items={model.inRooms}
                                />

                                <RoomTypeDetails items={model.roomTypes}/>

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

export default ViewDetailHotelModalWindow