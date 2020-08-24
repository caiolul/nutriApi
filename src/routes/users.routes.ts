import { Router } from 'express';
import EmailValidator from 'email-validator';
import { getRepository } from 'typeorm';
import CreateUsersServices from '../services/CreateUsersServices';
import User from '../models/Users';

const userRoutes = Router();

interface Types {
    id: string;
}
// Route working only for testing

userRoutes.get('/', async (request, response) => {
    const userRepo = getRepository(User);
    const users = await userRepo.find();
    return response.json(users);
});

userRoutes.post('/add', async (request, response) => {
    try {
        const { name, email, password } = request.body;
        const createUser = new CreateUsersServices();
        if (EmailValidator.validate(email)) {
            const user = await createUser.execute({
                name,
                email,
                password,
            });
            delete user.password;

            return response.json(user);
        }
        return response.status(400).json({ error: 'Email Invalid ' });
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

// userRoutes.patch(
//     '/avatar',
//     ensureAuthenticated,
//     update.single('avatar'),
//     async (req: Request, res: Response) => {
//         try {
//             const avatarUpdate = new AvatarUpdateServices();
//             // eslint-disable-next-line no-console
//             console.log(req.userTypes);
//             // const { id } = req.user;
//             const user = await avatarUpdate.execute({
//                 userId: req.userTypes.id,
//                 avatarName: req.file.filename,
//             });

//             return res.json(user);
//         } catch (error) {
//             return res.status(400).json({ error: error.message });
//         }
//     },
// );

export default userRoutes;
