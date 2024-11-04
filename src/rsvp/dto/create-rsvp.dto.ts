// src/rsvp/dto/create-rsvp.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateRsvpDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  comment: string;
}
