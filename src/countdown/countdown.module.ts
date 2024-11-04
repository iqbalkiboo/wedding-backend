import { Module } from '@nestjs/common';
import { CountdownController } from './countdown.controller';

@Module({
  controllers: [CountdownController]
})
export class CountdownModule {}
