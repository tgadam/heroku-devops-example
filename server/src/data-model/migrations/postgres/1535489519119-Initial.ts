import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1535489519119 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "app"."color" ("code" character varying(200) NOT NULL, "name" character varying(400) NOT NULL, CONSTRAINT "PK_a540f95d6db35f7948f364df478" PRIMARY KEY ("code"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "app"."color"`);
    }

}
