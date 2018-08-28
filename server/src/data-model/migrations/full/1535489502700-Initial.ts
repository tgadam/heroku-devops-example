
import { MigrationInterface, QueryRunner } from "typeorm";
import { Initial1535489502700 as DataMigClass } from "../data/1535489502700-Initial"; 
import { Initial1535489519119 as PostgresMigClass } from "../postgres/1535489519119-Initial"; 
// import { OracleMigrationClass12345 } from "../oracle/12345-OracleMigrationClass.ts"; 

export class Initial1535489502700 implements MigrationInterface {

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
