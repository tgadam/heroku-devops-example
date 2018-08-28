const oraDbConfig = require('./db-config.ora');

const host = "localhost";
const port = 5500;
const type = "postgres";
const appDbName = "devops";
const appSchema = "app";


const config = {
    dbConfig: {
        app: {
            type,
            host,
            username: 'postgres',
            password: 'Teselagen123',
            database: appDbName,
            schema: appSchema,
            port
        },
        owner: {
            type,
            host,
            username: 'postgres',
            password: 'Teselagen123',
            database: appDbName,
            schema: appSchema,
            port
        },
        sys: {
            type,
            host,
            username: 'postgres',
            password: 'Teselagen123',
            database: 'postgres',
            port
        },
        oraMig: oraDbConfig.dbConfig.owner,
        oraMigSys: oraDbConfig.dbConfig.sys
    }
};

module.exports = config;