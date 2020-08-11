import { getRepository } from 'typeorm';

import Patient from '../models/Patient';

interface Request {
    name: string;
    email: string;
    age: string;
    sex: string;
    occupation: string;
    reason: string;
    civilSituation: string;
    nutri_patient_id: string;
}

class CreatePatientService {
    public async execute({
        name,
        email,
        sex,
        age,
        occupation,
        civilSituation,
        reason,
        nutri_patient_id,
    }: Request): Promise<Patient> {
        const patientRepo = getRepository(Patient);
        const checkEmail = await patientRepo.findOne({
            where: { email },
        });
        if (checkEmail) {
            throw new Error('Email already exists...');
        }
        const patient = patientRepo.create({
            email,
            name,
            sex,
            age,
            occupation,
            civilSituation,
            reason,
            nutri_patient_id,
        });
        await patientRepo.save(patient);

        return patient;
    }
}

export default CreatePatientService;
