import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterColumnPatient1597017856312 implements MigrationInterface {
    name = 'AlterColumnPatient1597017856312';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "patients" ADD "age" text NOT NULL`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "patients" DROP COLUMN "age"`);
    }
}
