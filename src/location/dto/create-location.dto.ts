import { IsLatitude, IsLongitude, IsString } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  imageUrl: string;

  @IsLatitude()
  latitude: number;

  @IsLongitude()
  longitude: number;
}