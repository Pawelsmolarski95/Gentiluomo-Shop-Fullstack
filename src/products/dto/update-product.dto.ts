import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class UpdateProductDTO {
  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  name: string;
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @IsString()
  @Length(10, 400)
  description: string;
  @IsString()
  category: string
}
