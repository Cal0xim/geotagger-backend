import { IsLatitude, IsLongitude } from 'class-validator';

export class GuessLocationDto {
  @IsLatitude()
  guessedLatitude: number;

  @IsLongitude()
  guessedLongitude: number;
}