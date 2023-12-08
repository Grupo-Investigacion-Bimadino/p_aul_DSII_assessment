import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { PodscatModule } from './podscat/podscat.module';
import { ContenidosModule } from './contenidos/contenidos.module';
import { CreateusuarioController } from './createusuario/createusuario.controller';
import { EdicionModule } from './edicion/edicion.module'
import { FormatosService } from './formatos/formatos.service';
import { FormatosModule } from './formatos/formatos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsuarioModule, PodscatModule, ContenidosModule, EdicionModule, FormatosModule,MongooseModule],
  controllers: [AppController,CreateusuarioController],
  providers: [AppService, FormatosService],
})
export class AppModule {}
