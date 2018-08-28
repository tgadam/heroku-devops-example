const host = "localhost";
const port = 4521;
const type = "oracle";
const sid = "xe";
const ownerSchema = "SIMPLE_OWNER";
const appSchema = ownerSchema;

module.exports = {
    dbConfig: {
        app: {
            type,
            host,
            username: appSchema,
            password: 'oracle',
            sid,
            port
        },
        owner: {
            type,
            host,
            username: ownerSchema,
            password: 'oracle',
            sid,
            port
        },
        sys: {
            type,
            host,
            username: 'system',
            password: 'oracle',
            sid,
            port
        }
    }
}