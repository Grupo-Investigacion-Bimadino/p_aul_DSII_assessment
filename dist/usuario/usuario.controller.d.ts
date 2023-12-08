import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    getHello(): string;
    findOne(id: number): string;
    findAll(): string;
    create(createUsuarioDto: any): string;
    update(id: number, updateUsuario: any): string;
    delete(id: number): string;
}
