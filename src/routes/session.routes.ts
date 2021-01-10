import { Router } from 'express';
import EmailValidator from 'email-validator';
import SessionUserServices from '../services/SessionUserServices';

const sessionRoutes = Router();

sessionRoutes.post('/', async (request, response) => {
    try {
        const { email, password } = request.body;
        if (EmailValidator.validate(email)) {
            const sessionAuthenticate = new SessionUserServices();

            const { user, token } = await sessionAuthenticate.execute({
                email,
                password,
            });
            delete user.password;

            return response.json({ user, token });
        }
        return response.status(401).json({ error: 'Email Invalid ' });
    } catch (err) {
        return response.status(401).json({ error: err.message });
    }
});

export default sessionRoutes;
