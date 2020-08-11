import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterColumnReportPatient1597100661978 implements MigrationInterface {
    name = 'AlterColumnReportPatient1597100661978'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "report" ADD "vetValue" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "vetValue"`);
    }

}
