"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const usuario_module_1 = require("./usuario/usuario.module");
const podscat_module_1 = require("./podscat/podscat.module");
const contenidos_module_1 = require("./contenidos/contenidos.module");
const createusuario_controller_1 = require("./createusuario/createusuario.controller");
const edicion_module_1 = require("./edicion/edicion.module");
const formatos_service_1 = require("./formatos/formatos.service");
const formatos_module_1 = require("./formatos/formatos.module");
const mongoose_1 = require("@nestjs/mongoose");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [usuario_module_1.UsuarioModule, podscat_module_1.PodscatModule, contenidos_module_1.ContenidosModule, edicion_module_1.EdicionModule, formatos_module_1.FormatosModule, mongoose_1.MongooseModule],
        controllers: [app_controller_1.AppController, createusuario_controller_1.CreateusuarioController],
        providers: [app_service_1.AppService, formatos_service_1.FormatosService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map