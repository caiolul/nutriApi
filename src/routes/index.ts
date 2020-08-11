import { Router } from 'express';
import patientRoutes from './patients.routes';
import userRoutes from './users.routes';
import sessionRoutes from './session.routes';

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/patient', patientRoutes);
routes.use('/session', sessionRoutes);

export default routes;
