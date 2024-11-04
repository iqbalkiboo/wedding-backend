// src/countdown/countdown.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('countdown')
export class CountdownController {
  @Get()
  getCountdown() {
    const now = new Date();
    const targetDate = new Date('2025-01-11T00:00:00+07:00'); // Waktu Indonesia (WIB)

    // Hitung selisih waktu
    const remainingTime = targetDate.getTime() - now.getTime();

    if (remainingTime < 0) {
      return { message: 'Waktu Habis!' };
    }

    // Hitung hari, jam, menit, dan detik
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60),
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
}
