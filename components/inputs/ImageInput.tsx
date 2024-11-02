"use client"
import { CreatePhotoDto } from '@/AppDtos/Dto/Models/Photos/create-photo-dto';
import { CreateResponseDto } from '@/AppDtos/ResponseDto/create-response-dto';
import { useAuth, useAuthService } from '@/hooks/auth';
import { PhotoService } from '@/service/PhotoService';
import axios, { AxiosResponse } from 'axios';
import React, { useState } from 'react'

const ImageInput = ({
    photoableId
}:{
    photoableId: string
}

) => {
  const [createPhotoDto, setCreatePhotoDto] = useState<CreatePhotoDto | null>(null);

  let photoService = new PhotoService();

  useAuthService(photoService);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setCreatePhotoDto({
        photo: event.target.files[0],
        photoableId,
      });
    }
  };

  const handleUpload = async () => {
    if (createPhotoDto) {
      try {
        console.debug(createPhotoDto);

        //await photoService.create(createPhotoDto);
        const formData = new FormData();
        formData.append('Photo', createPhotoDto.photo);
        formData.append('PhotoableId', createPhotoDto.photoableId);

        const response: AxiosResponse<CreateResponseDto> = await axios.post('https://localhost:7079/api/v1/Photo', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Image uploaded successfully!');
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};
export default ImageInput