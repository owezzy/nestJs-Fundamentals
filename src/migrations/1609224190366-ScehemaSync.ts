import {MigrationInterface, QueryRunner} from "typeorm";

export class ScehemaSync1609224190366 implements MigrationInterface {
    name = 'ScehemaSync1609224190366'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" ADD "description" character varying`);
        await queryRunner.query(`CREATE INDEX "IDX_b535fbe8ec6d832dde22065ebd" ON "event" ("name") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_b535fbe8ec6d832dde22065ebd"`);
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description"`);
    }

}
