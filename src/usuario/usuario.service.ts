import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioService {
  getHello(): string {
    return 'Aqui los usuarios';
}
  private usuarios: any[] = [];
 

  findOne(id: number): string {
    return `Get usuario with id ${id}`;
  }

  findAll(): string {
    return 'Get all usuarios, No existe nada aun';
  }

  create(createUsuarioDto): string {
    this.usuarios.push(createUsuarioDto);
    return 'Usuario created successfully';
  }

  update(id, updateUsuario): string {
    return 'Usuario updated successfully';
  }

  delete(id): string {
    return 'Usuario deleted successfully';
  }
}
