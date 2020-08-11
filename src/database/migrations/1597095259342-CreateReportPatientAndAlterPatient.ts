import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateReportPatientAndAlterPatient1597095259342 implements MigrationInterface {
    name = 'CreateReportPatientAndAlterPatient1597095259342'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "report" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "problemPatient" character varying NOT NULL, "patient_id" uuid NOT NULL, "weight" integer NOT NULL, "height" integer NOT NULL, "nivelFsica" character varying NOT NULL, "cc" integer NOT NULL, "cq" integer NOT NULL, "porcentFat" integer NOT NULL, "tmbValue" integer NOT NULL, "imcValue" integer NOT NULL, "medication" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "REL_d68163afee3db4066b11303c89" UNIQUE ("patient_id"), CONSTRAINT "PK_99e4d0bea58cba73c57f935a546" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "report" ADD CONSTRAINT "FK_d68163afee3db4066b11303c89e" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "report" DROP CONSTRAINT "FK_d68163afee3db4066b11303c89e"`);
        await queryRunner.query(`DROP TABLE "report"`);
    }

}
