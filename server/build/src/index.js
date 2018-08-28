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
require("reflect-metadata");
const graphql_yoga_1 = require("graphql-yoga");
const typedi_1 = require("typedi");
const TypeGraphQL = require("type-graphql");
const HelloWorldResolver_1 = require("./graphql/resolvers/HelloWorldResolver");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const express = require("express");
// register 3rd party IOC container
TypeGraphQL.useContainer(typedi_1.Container);
const resolvers = [HelloWorldResolver_1.HelloWorldResolver];
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const schema = yield TypeGraphQL.buildSchema({
                resolvers,
            });
            // create mocked context
            // const context: Context = { user: defaultUser };
            const context = { user: { name: "defaultUser", id: 1 } };
            // Create GraphQL server
            const server = new graphql_yoga_1.GraphQLServer({ schema, context });
            // Configure Express options
            server.express.use(cors());
            server.express.use(morgan("dev"));
            if (process.env.NODE_ENV === "production") {
                server.express.use(express.static(path.resolve(__dirname, "../../client/build")));
            }
            // Configure server options
            const serverOptions = {
                port: process.env.PORT || 4000,
                endpoint: "/graphql",
                playground: "/playground",
            };
            // Start the server
            server.start(serverOptions, ({ port, playground }) => {
                console.log(`Server is running, GraphQL Playground available at http://localhost:${port}${playground}`);
            });
        }
        catch (err) {
            console.error(err);
        }
    });
}
bootstrap();
//# sourceMappingURL=index.js.map