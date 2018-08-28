
module.exports = {
    ormConfig: {
        migrationDir: "src/data-model/migrations",
        entityDir: "src/data-model/entities",
        snapshotDir: "src/data-model/data/snapshots",
        //entitySchemaDir: "src/data-model/entity-schemas",
        dictionaryDataDir: "src/data-model/data/dictionaries",
        lookupDataDir: "src/data-model/data/lookups",
        sampleDataDir: "src/data-model/data/samples",
        workingDir: "src/data-model/working",
    }
}