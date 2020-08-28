import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/Users';

interface Request {
    name: string;
    email: string;
    password: string;
}

class CreateUsersServices {
    public async execute({ name, email, password }: Request): Promise<User> {
        const userRepo = getRepository(User);
        const checkEmail = await userRepo.findOne({
            where: { email },
        });
        if (checkEmail) {
            throw new Error('Email already exists...');
        }
        const hashPass = await hash(password, 12);
        const user = userRepo.create({
            name,
            email,
            password: hashPass,
        });
        await userRepo.save(user);
        return user;
    }
}

export default CreateUsersServices;
