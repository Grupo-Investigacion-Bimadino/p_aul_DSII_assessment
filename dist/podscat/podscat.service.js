"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodscatService = void 0;
const common_1 = require("@nestjs/common");
const podscat_entity_1 = require("./schema/podscat.entity");
let PodscatService = class PodscatService {
    constructor() {
        this.podscat = [
            {
                id: "1",
                title: 'El Meta Verso',
                artist: 'Juan Perez',
                status: podscat_entity_1.PodscatStatus.PENDING,
                description: 'el mejor podscat',
                duration: 212,
            }
        ];
    }
    createPodscat(title, description) {
        throw new Error('Method not implemented.');
    }
    getAllPodscat() {
        return this.podscat;
    }
};
exports.PodscatService = PodscatService;
exports.PodscatService = PodscatService = __decorate([
    (0, common_1.Injectable)()
], PodscatService);
//# sourceMappingURL=podscat.service.js.map