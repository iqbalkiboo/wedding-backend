// src/rsvp/rsvp.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateRsvpDto } from './dto/create-rsvp.dto';

@Controller('rsvp')
export class RsvpController {
  private rsvps = []; // Menyimpan RSVP sementara

  @Post()
  create(@Body() createRsvpDto: CreateRsvpDto) {
    this.rsvps.push(createRsvpDto); // Menyimpan RSVP
    return { message: 'RSVP submitted successfully', data: createRsvpDto };
  }

  @Get()
  findAll() {
    return this.rsvps; // Mengembalikan semua RSVP
  }
}
