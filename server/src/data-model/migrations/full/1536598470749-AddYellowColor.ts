
import { MigrationInterface, QueryRunner } from "typeorm";
import { AddYellowColor1536598470749 as DataMigClass } from "../data/1536598470749-AddYellowColor"; 
import { AddYellowColor1536598504284 as PostgresMigClass } from "../postgres/1536598504284-AddYellowColor"; 
// import { OracleMigrationClass12345 } from "../oracle/12345-OracleMigrationClass.ts"; 

export class AddYellowColor1536598470749 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const connection = queryRunner.connection;
        const dialect = connection.options.type;

        if(dialect === "postgres"){
            const pgMig = new PostgresMigClass();
            await pgMig.up(queryRunner);
        } else {
            // TODO Add Oracle Support
        }
        await queryRunner.commitTransaction();
        await queryRunner.startTransaction();
        
        const dataMig = new DataMigClass();
        await dataMig.up(queryRunner);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const connection = queryRunner.connection;
        const dialect = connection.options.type;

        if(dialect === "postgres"){
            const pgMig = new PostgresMigClass();
            await pgMig.down(queryRunner);
        } else {
            // TODO Add Oracle Support
        }
        await queryRunner.commitTransaction();
        await queryRunner.startTransaction();
        
        const dataMig = new DataMigClass();
        await dataMig.down(queryRunner);
    }

}
