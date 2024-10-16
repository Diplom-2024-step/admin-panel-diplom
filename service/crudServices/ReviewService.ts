import { GetReviewDto, getReviewDtoSchema } from "@/AppDtos/Dto/Models/Reviews/get-review-dto";
import { CrudService } from "../shared/CrudService";
import { CreateReviewDto, createReviewDtoSchema } from "@/AppDtos/Dto/Models/Reviews/create-review-dto";
import { UpdateReviewDto, updateReviewDtoSchema } from "@/AppDtos/Dto/Models/Reviews/update-review-dto";

export class ReviewService extends CrudService<
    GetReviewDto,
    CreateReviewDto,
    UpdateReviewDto
> {
    public constructor() {
        super(getReviewDtoSchema, createReviewDtoSchema, updateReviewDtoSchema);
    }
}
