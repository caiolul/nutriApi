import { Router } from 'express';
import EmailValidator from 'email-validator';
import { getRepository } from 'typeorm';
import Patient from '../models/Patient';
// import PatientRepository from '../repositories/PatientRepository';
import CreatePatientServices from '../services/CreatePatientServices';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const patientRoutes = Router();

patientRoutes.use(ensureAuthenticated);

patientRoutes.get('/', async (request, response) => {
    const patienteRepo = getRepository(Patient);
    const patients = await patienteRepo.find();
    return response.json(patients);
});

patientRoutes.post('/add', async (request, response) => {
    try {
        const {
            name,
            email,
            nutri_patient_id,
            sex,
            occupation,
            civilSituation,
            reason,
            age,
        } = request.body;
        const createPatient = new CreatePatientServices();
        if (EmailValidator.validate(email)) {
            const patient = await createPatient.execute({
                name,
                email,
                sex,
                occupation,
                civilSituation,
                reason,
                age,
                nutri_patient_id,
            });
            return response.json(patient);
        }

        return response.status(400).json({ error: 'Email Invalid ' });
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default patientRoutes;
