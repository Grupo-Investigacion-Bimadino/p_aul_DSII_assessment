import { Controller, Get, } from '@nestjs/common';
import { ContenidosService } from './contenidos.service';

@Controller('contenidos')
export class ContenidosController {
    constructor(private readonly contenidosService: ContenidosService) {}

    @Get()
    getHello(): string {
      return this.contenidosService.getHello();
    }
  
}
