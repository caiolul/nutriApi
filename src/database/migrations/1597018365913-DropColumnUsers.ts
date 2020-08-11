import { MigrationInterface, QueryRunner } from 'typeorm';

export class DropColumnUsers1597018365913 implements MigrationInterface {
    name = 'DropColumnUsers1597018365913';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatar"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "users" ADD "avatar" character varying NOT NULL`,
        );
    }
}
