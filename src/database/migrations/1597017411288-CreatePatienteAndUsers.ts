import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePatienteAndUsers1597017411288 implements MigrationInterface {
    name = 'CreatePatienteAndUsers1597017411288';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "avatar" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "patients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "nutri_patient_id" uuid NOT NULL, "email" text NOT NULL, "sex" text NOT NULL, "occupation" text NOT NULL, "civilSituation" text NOT NULL, "reason" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a7f0b9fcbb3469d5ec0b0aceaa7" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `ALTER TABLE "patients" ADD CONSTRAINT "FK_1a1bfe55eb8a6960c70ea352dc5" FOREIGN KEY ("nutri_patient_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "patients" DROP CONSTRAINT "FK_1a1bfe55eb8a6960c70ea352dc5"`,
        );
        await queryRunner.query(`DROP TABLE "patients"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
