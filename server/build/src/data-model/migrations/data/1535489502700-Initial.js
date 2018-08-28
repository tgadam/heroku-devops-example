"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = require("../../entities/color");
class Initial1535489502700 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.connection.manager.insert(color_1.Color, [
                {
                    "code": "BLUE",
                    "name": "Blue"
                },
                {
                    "code": "RED",
                    "name": "Red"
                },
                {
                    "code": "GREEN",
                    "name": "Green"
                }
            ]);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.Initial1535489502700 = Initial1535489502700;
//# sourceMappingURL=1535489502700-Initial.js.map