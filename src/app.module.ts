import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RsvpModule } from './rsvp/rsvp.module';
import { CountdownModule } from './countdown/countdown.module';

@Module({
  imports: [RsvpModule, CountdownModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
