import { getRepository } from 'typeorm';
import ReportPatient from '../models/ReportPatient';
import TmbResult from '../util/TmbFunction';
import VetResult from '../util/VetFunction';
import ImcResult from '../util/ImcFunction';

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
            tmbValue: TmbResult(problemPatient, nivelFsica, weight),
            vetValue: VetResult(
                TmbResult(problemPatient, nivelFsica, weight),
                nivelFsica,
            ),
            imcValue: ImcResult(weight, height),
        });
        await dataReport.save(report);
        return report;
    }
}

export default CreateReportPatientServices;
