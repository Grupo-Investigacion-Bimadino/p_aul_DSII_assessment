"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.podscatschema = exports.Podscat1 = exports.PodscatStatus = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
var PodscatStatus;
(function (PodscatStatus) {
    PodscatStatus["PENDING"] = "PENDING";
    PodscatStatus["IN_PROGRESS"] = "INPROGRESS";
    PodscatStatus["DONE"] = "DONE";
})(PodscatStatus || (exports.PodscatStatus = PodscatStatus = {}));
let Podscat1 = class Podscat1 extends mongoose_2.Document {
};
exports.Podscat1 = Podscat1;
__decorate([
    (0, mongoose_1.Prop)({ require: true }),
    __metadata("design:type", String)
], Podscat1.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true }),
    __metadata("design:type", String)
], Podscat1.prototype, "artist", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true }),
    __metadata("design:type", Number)
], Podscat1.prototype, "duration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true }),
    __metadata("design:type", String)
], Podscat1.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true }),
    __metadata("design:type", String)
], Podscat1.prototype, "status", void 0);
exports.Podscat1 = Podscat1 = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Podscat1);
exports.podscatschema = mongoose_1.SchemaFactory.createForClass(Podscat1);
//# sourceMappingURL=podscat.schema.js.map