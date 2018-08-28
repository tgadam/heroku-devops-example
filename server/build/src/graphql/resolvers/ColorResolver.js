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
const type_graphql_1 = require("type-graphql");
const color_1 = require("../../data-model/entities/color");
const typeorm_1 = require("typeorm");
let ColorResolver = class ColorResolver {
    colors() {
        const repo = typeorm_1.getRepository(color_1.Color);
        return repo.find();
    }
};
__decorate([
    type_graphql_1.Query(returns => [color_1.Color]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ColorResolver.prototype, "colors", null);
ColorResolver = __decorate([
    type_graphql_1.Resolver(color_1.Color)
], ColorResolver);
exports.ColorResolver = ColorResolver;
//# sourceMappingURL=ColorResolver.js.map