import "reflect-metadata";
import { GraphQLServer, Options } from "graphql-yoga";
import { Container } from "typedi";
import * as TypeGraphQL from "type-graphql";
import { HelloWorldResolver } from "./graphql/resolvers/HelloWorldResolver";
import * as cors from "cors";
import * as morgan from "morgan";
import * as path from "path";
import * as express from "express";
import { existsSync } from "fs";

// register 3rd party IOC container
TypeGraphQL.useContainer(Container);
const resolvers: any[] = [HelloWorldResolver];

async function bootstrap() {
    try {
 
        const schema = await TypeGraphQL.buildSchema({
            resolvers,
        });

        // create mocked context
        // const context: Context = { user: defaultUser };
        const context = { user: { name: "defaultUser", id: 1 } };

        // Create GraphQL server
        const server = new GraphQLServer({ schema, context });
        
        // Configure Express options
        server.express.use(cors());
        server.express.use(morgan("combined"));

        if(process.env.NODE_ENV === "production" || process.env.TG_SERVE_CLIENT){
            const rootStaticPath = path.resolve(__dirname, "../../../client/build");
            console.log(`Serving client from: ${rootStaticPath}`);
            if(existsSync(path.join(rootStaticPath, "index.html"))){
                console.log(`index.html found in root static path.`);
            }else{
                console.warn(`No index.html found in root static path`);
            }
            server.express.use(express.static(rootStaticPath));
        }

        // Configure server options
        const serverOptions: Options = {
            port: process.env.PORT || 4000,
            endpoint: "/graphql",
            playground: "/playground",
        };

        // Start the server
        server.start(serverOptions, ({ port, playground }) => {
            console.log(
                `Server is running, GraphQL Playground available at http://localhost:${port}${playground}`,
            );
        });
    } catch (err) {
        console.error(err);
    }
}

bootstrap();