import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../models/Users';
import Auth from '../config/authConf'; // Arquivo de config

interface Request {
    email: string;
    password: string;
}
interface Response {
    user: User;
    token: string;
}

class SessionUserServices {
    public async execute({ email, password }: Request): Promise<Response> {
        const userRepo = getRepository(User);
        const user = await userRepo.findOne({
            where: { email },
        });
        if (!user) {
            throw new Error('Email incorret/Password incorret');
        }
        const checkPassword = await compare(password, user.password);
        if (!checkPassword) {
            throw new Error('Email incorret/Password incorret');
        }

        // token
        const token = sign({}, Auth.jwt.secret, {
            subject: user.id,
            expiresIn: Auth.jwt.expired,
        });
        return {
            user,
            token,
        };
    }
}

export default SessionUserServices;
