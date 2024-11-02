import { GetPhotoDto, getPhotoDtoSchema } from "@/AppDtos/Dto/Models/Photos/get-photo-dto";
import { CrudService } from "./shared/CrudService";
import { CreatePhotoDto, createPhotoDtoSchema } from "@/AppDtos/Dto/Models/Photos/create-photo-dto";
import { UpdatePhotoDto, updatePhotoDtoSchema } from "@/AppDtos/Dto/Models/Photos/update-photo-dto";
import Service from "./shared/Service";
import { CreateResponseDto } from "@/AppDtos/ResponseDto/create-response-dto";
import { AxiosResponse } from "axios";
import { FilterPaginationDto, filterPaginationDtoSchema } from "@/AppDtos/Shared/filter-pagination-dto";
import { ReturnPageDto } from "@/AppDtos/Shared/return-page-dto";
import { z } from "zod";



export class PhotoService extends Service {

    public constructor() {
        super('/Photo')
    }

    async create(create: CreatePhotoDto)
    {
        const formData = new FormData();
        formData.append('Photo', create.photo);
        formData.append('PhotoableId', create.photoableId);

        const response: AxiosResponse<CreateResponseDto> = await this.axiosInstance.post('', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        return response;
    }

    async getAllPhotos(
		paginationDto: FilterPaginationDto
	): Promise<AxiosResponse<ReturnPageDto<GetPhotoDto>>> {
		filterPaginationDtoSchema.parse(paginationDto);
		return this.axiosInstance.get("", { params: paginationDto });
	}

async update(create: UpdatePhotoDto)
    {
        const formData = new FormData();
        formData.append('Photo', create.photo);
        formData.append('Id', create.id);
        formData.append('PhotoableId', create.photoableId);

        const response: AxiosResponse<CreateResponseDto> = await this.axiosInstance.put('', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        return response;
    }

    async getPhotoById(id: string): Promise<AxiosResponse<GetPhotoDto>> {
		z.string().uuid().parse(id);
		return this.axiosInstance.get(`${id}`);
	}

}


