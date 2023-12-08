import { Module } from '@nestjs/common';
import { ContenidosService } from './contenidos.service';
import { ContenidosController } from './contenidos.controller';

@Module({
  providers: [ContenidosService],
  controllers: [ContenidosController]
})
export class ContenidosModule {}
