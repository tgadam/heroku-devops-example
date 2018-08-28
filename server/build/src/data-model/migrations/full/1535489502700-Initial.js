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
const _1535489502700_Initial_1 = require("../data/1535489502700-Initial");
const _1535489519119_Initial_1 = require("../postgres/1535489519119-Initial");
// import { OracleMigrationClass12345 } from "../oracle/12345-OracleMigrationClass.ts"; 
class Initial1535489502700 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = queryRunner.connection;
            const dialect = connection.options.type;
            if (dialect === "postgres") {
                const pgMig = new _1535489519119_Initial_1.Initial1535489519119();
                yield pgMig.up(queryRunner);
            }
            else {
                // TODO Add Oracle Support
            }
            yield queryRunner.commitTransaction();
            yield queryRunner.startTransaction();
            const dataMig = new _1535489502700_Initial_1.Initial1535489502700();
            yield dataMig.up(queryRunner);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = queryRunner.connection;
            const dialect = connection.options.type;
            if (dialect === "postgres") {
                const pgMig = new _1535489519119_Initial_1.Initial1535489519119();
                yield pgMig.down(queryRunner);
            }
            else {
                // TODO Add Oracle Support
            }
            yield queryRunner.commitTransaction();
            yield queryRunner.startTransaction();
            const dataMig = new _1535489502700_Initial_1.Initial1535489502700();
            yield dataMig.down(queryRunner);
        });
    }
}
exports.Initial1535489502700 = Initial1535489502700;
//# sourceMappingURL=1535489502700-Initial.js.map