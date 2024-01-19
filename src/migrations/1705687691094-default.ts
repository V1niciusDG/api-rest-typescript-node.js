import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1705687691094 implements MigrationInterface {
    name = 'Default1705687691094'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" ADD "description" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" DROP COLUMN "description"`);
    }

}
