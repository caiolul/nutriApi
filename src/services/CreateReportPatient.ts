import { getRepository } from 'typeorm';
import ReportPatient from '../models/ReportPatient';

interface Request {
    problemPatient: string;
    weight: number;
    height: number;
    nivelFsica: string;
    cc: number;
    cq: number;
    porcentFat: number;
    tmbValue: number;
    vetValue: number;
    imcValue: number;
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
        tmbValue,
        vetValue,
        imcValue,
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
            medication,
            problemPatient,
            height,
            weight,
            cc,
            cq,
            nivelFsica,
            porcentFat,
            tmbValue,
            vetValue,
            imcValue,
        });
        await dataReport.save(report);
        return report;
    }
}

export default CreateReportPatientServices;
