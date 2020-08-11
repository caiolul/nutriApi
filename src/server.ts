import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import './database';
// import patientRoutes from './routes/patients.routes';

const app = express();

app.use(express.json());
app.use(routes);
// app.use('/patient', patientRoutes);

app.listen(3333, () => {
    // eslint-disable-next-line no-console
    console.log('http://localhost:3333');
});
