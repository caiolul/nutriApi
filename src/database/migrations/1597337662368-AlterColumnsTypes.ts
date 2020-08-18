import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterColumnsTypes1597337662368 implements MigrationInterface {
    name = 'AlterColumnsTypes1597337662368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "weight"`);
        await queryRunner.query(`ALTER TABLE "report" ADD "weight" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "height"`);
        await queryRunner.query(`ALTER TABLE "report" ADD "height" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "cc"`);
        await queryRunner.query(`ALTER TABLE "report" ADD "cc" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "cq"`);
        await queryRunner.query(`ALTER TABLE "report" ADD "cq" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "porcentFat"`);
        await queryRunner.query(`ALTER TABLE "report" ADD "porcentFat" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "tmbValue"`);
        await queryRunner.query(`ALTER TABLE "report" ADD "tmbValue" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "imcValue"`);
        await queryRunner.query(`ALTER TABLE "report" ADD "imcValue" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "vetValue"`);
        await queryRunner.query(`ALTER TABLE "report" ADD "vetValue" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "vetValue"`);
        await queryRunner.query(`ALTER TABLE "report" ADD "vetValue" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "imcValue"`);
        await queryRunner.query(`ALTER TABLE "report" ADD "imcValue" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "tmbValue"`);
        await queryRunner.query(`ALTER TABLE "report" ADD "tmbValue" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "porcentFat"`);
        await queryRunner.query(`ALTER TABLE "report" ADD "porcentFat" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "cq"`);
        await queryRunner.query(`ALTER TABLE "report" ADD "cq" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "cc"`);
        await queryRunner.query(`ALTER TABLE "report" ADD "cc" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "height"`);
        await queryRunner.query(`ALTER TABLE "report" ADD "height" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "weight"`);
        await queryRunner.query(`ALTER TABLE "report" ADD "weight" integer NOT NULL`);
    }

}
