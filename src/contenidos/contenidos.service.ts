import { Injectable } from '@nestjs/common';

@Injectable()
export class ContenidosService {
getHello(): string {
    return 'Aqui los Contenidos';
    }
}
