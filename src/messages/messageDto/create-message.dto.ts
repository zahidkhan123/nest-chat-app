import { IsString, Length } from "class-validator";

export class CreateMessageDTO {
    @IsString()
    @Length(5)
    content: string

}