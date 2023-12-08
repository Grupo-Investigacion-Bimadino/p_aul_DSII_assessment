import { Module } from '@nestjs/common';
import { FormatosController } from './formatos.controller';

@Module({
  controllers: [FormatosController]
})
export class FormatosModule {}
