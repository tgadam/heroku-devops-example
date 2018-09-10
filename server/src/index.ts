import "sqreen";
import "reflect-metadata";
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
import { Container } from "typedi";
import * as TypeORM from "typeorm";
import * as TypeGraphQL from "type-graphql";
import { HelloWorldResolver } from "./graphql/resolvers/HelloWorldResolver";
import { ColorResolver } from "./graphql/resolvers/ColorResolver";
import * as cors from "cors";
import * as morgan from "morgan";
import * as path from "path";
import * as express from "express";
import * as bodyParser from "body-parser";
import { existsSync } from "fs";
import { getConfigs } from "@teselagen/dbmgr";
import { values, keys } from "lodash";
import * as entityMap from "./data-model/entityMap";
import * as dotenv from "dotenv";

let envConfigPath = "";
let cwd = process.cwd();
envConfigPath = path.resolve(cwd, '.db.env');

// if(fs.existsSync(path.join(cwd, ".db.env"))){
//     envConfigPath = path.resolve(cwd, '.db.env');
// }else if(fs.existsSync(path.join(cwd, "server/.db.env"))){
//     envConfigPath = path.resolve(cwd, 'server/.db.env');
// }else{
//     throw new Error("Unable to locate .db.env");
// }

console.log(`envConfigPath: ${envConfigPath}`);
dotenv.config({ path: envConfigPath });
// register 3rd party IOC container
TypeGraphQL.useContainer(Container);
const resolvers: any[] = [HelloWorldResolver, ColorResolver];

async function bootstrap() {
    try {

        const configs = await getConfigs();
        console.log("config", configs);
        const entities = values(entityMap);
        const connInfo = {
            ...configs.appDbConfig
        };
        console.log("connInfo", connInfo);
        connInfo.name = "default";
        connInfo.entities = entities;
        // create TypeORM connection
        await TypeORM.createConnection(connInfo);

        const schema = await TypeGraphQL.buildSchema({
            resolvers,
        });

        // create mocked context
        // const context: Context = { user: defaultUser };
        const context = { user: { name: "defaultUser", id: 1 } };

        const app = express();

        // Configure Express options
        if (!(process.env.NODE_ENV === "production" || process.env.TG_SERVE_CLIENT)) {
            app.use(cors());
        }

        app.use(morgan("combined"));

        app.use(
            '/graphql',
            bodyParser.json(),
            (req, res, next) => {
                return graphqlExpress({ schema, context: { req: req } })(
                    req,
                    res,
                    next
                )
            }
        )

        app.use(
            '/graphiql',
            graphiqlExpress({
                endpointURL: `/graphql`
            })
        )

        if (process.env.NODE_ENV === "production" || process.env.TG_SERVE_CLIENT) {
            const rootStaticPath = path.resolve(__dirname, "../../../client/build");
            console.log(`Serving client from: ${rootStaticPath}`);
            if (existsSync(path.join(rootStaticPath, "index.html"))) {
                console.log(`index.html found in root static path.`);
            } else {
                console.warn(`No index.html found in root static path`);
            }
            app.use("/", express.static(rootStaticPath));
        }
        return new Promise((resolve, reject) => {
            try {
                const port = process.env.PORT || 4000;
                const server = app.listen(port, function (err) {
                    if (err) {
                        reject(err);
                    }
                    console.log(`Serving app at http://localhost:${port}.`)
                    resolve(app);
                });
                app.set("server", server); //set the server on app so we can programatically call server.close() later in tests
            } catch (err) {
                reject(err);
            }
        });

    } catch (err) {
        console.error(err);
    }
    return null;
}

bootstrap();