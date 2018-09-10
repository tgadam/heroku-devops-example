
import { MigrationInterface, QueryRunner } from "typeorm";
import { Color } from "../../entities/color";
export class AddYellowColor1536598470749 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.connection.manager.insert(Color, [
            {
                "code": "YELLOW",
                "name": "Yellow"
            }
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.connection.manager.delete(Color, ["YELLOW"]);
    }

}
