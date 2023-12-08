import { Module } from '@nestjs/common';
import { EdicionController } from './edicion.controller';
import { EdicionService } from './edicion.service';

@Module({
  controllers: [EdicionController],
  providers: [EdicionService]
})
export class EdicionModule {}
