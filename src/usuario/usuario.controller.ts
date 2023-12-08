import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  import { UsuarioService } from './usuario.service'; // Assuming you have a UsuarioService
  
  @Controller('usuarios')
  export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}
    @Get()
    getHello(): string {
      return this.usuarioService.getHello();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number): string {
      return this.usuarioService.findOne(id);
    }
  
    @Get()
    findAll(): string {
      return this.usuarioService.findAll();
    }
  
    @Post()
    create(@Body() createUsuarioDto): string {
      return this.usuarioService.create(createUsuarioDto);
    }
  
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateUsuario): string {
      return this.usuarioService.update(id, updateUsuario);
    }
  
    @Delete(':id')
    delete(@Param('id') id: number): string {
      return this.usuarioService.delete(id);
    }
  }
  