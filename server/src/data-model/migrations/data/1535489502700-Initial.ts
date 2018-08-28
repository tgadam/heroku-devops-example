
import { MigrationInterface, QueryRunner } from "typeorm";
import { Color } from "../../entities/color";
export class Initial1535489502700 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.connection.manager.insert(Color, [
            {
                "code": "BLUE",
                "name": "Blue"
            },
            {
                "code": "RED",
                "name": "Red"
            },
            {
                "code": "GREEN",
                "name": "Green"
            }
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {

    }

}
