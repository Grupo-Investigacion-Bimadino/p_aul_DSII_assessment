import { Controller, Get } from '@nestjs/common';
import { EdicionService } from './edicion.service';

@Controller('edicion')
export class EdicionController {
    constructor(private readonly edicionService: EdicionService) {}

    @Get()
    getHello(): string {
      return this.edicionService.getHello();
    }
  
}
