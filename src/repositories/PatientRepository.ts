import { EntityRepository, Repository } from 'typeorm';

import Patient from '../models/Patient';

// interface createPatientDTO {
//     name: string;
//     email: string;
// }
@EntityRepository(Patient)
class PatientRepository extends Repository<Patient> {
    public async findByName(name: string): Promise<Patient | null> {
        // const findPatient = this.patients.find(pat => name == pat.name);
        const findPatient = await this.findOne({
            where: { name },
        });
        return findPatient || null;
    }
}

export default PatientRepository;
