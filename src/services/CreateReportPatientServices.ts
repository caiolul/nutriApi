import { getRepository } from 'typeorm';
import ReportPatient from '../models/ReportPatient';
import TmbResult from '../util/TmbFunction';
import VetResult from '../util/VetFunction';
import ImcResult from '../util/ImcFunction';
import Patient from '../models/Patient';

interface Request {
    problemPatient: string;
    weight: number;
    height: number;
    nivelFsica: string;
    cc: number;
    cq: number;
    porcentFat: number;
    medication: string;
    patient_id: string;
}

class CreateReportPatientServices {
    public async execute({
        problemPatient,
        weight,
        height,
        nivelFsica,
        cc,
        cq,
        porcentFat,
        medication,
        patient_id,
    }: Request): Promise<ReportPatient> {
        const dataReport = getRepository(ReportPatient);
        const checkPatient = await dataReport.findOne({
            where: { patient_id },
        });
        if (checkPatient) {
            throw new Error('Report already exists...');
        }
        // query for seach sex in patient
        const {sex} = await getRepository(Patient)
            .createQueryBuilder("patient")
            .select("sex", "sex")
            .where("patient.id = :id", { id: patient_id })
            .getRawOne();

        console.log(sex);
        const report = dataReport.create({
            patient_id,
            medication,
            problemPatient,
            height,
            weight,
            cc,
            cq,
            nivelFsica,
            porcentFat,
            tmbValue: TmbResult(sex, nivelFsica, weight),
            vetValue: VetResult(
                TmbResult(sex, nivelFsica, weight),
                nivelFsica,
            ),
            imcValue: ImcResult(weight, height),
        });
        await dataReport.save(report);
        return report;
    }
}

export default CreateReportPatientServices;
