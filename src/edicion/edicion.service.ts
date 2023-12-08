import { Injectable } from '@nestjs/common';

@Injectable()
export class EdicionService {
    getHello(): string {
        return 'Aqui la edicion';
        }
}
