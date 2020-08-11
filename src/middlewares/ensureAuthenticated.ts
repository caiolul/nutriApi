import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import Auth from '../config/authConf';

interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export default function ensureAuthenticated(
    request: Request,
    reponse: Response,
    next: NextFunction,
): void {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error('JWT missing...');
    }

    const [, token] = authHeader.split(' ');
    try {
        const jwtDecoded = verify(token, Auth.jwt.secret);
        const { sub } = jwtDecoded as TokenPayload;
        // Criando novo metodo
        request.userTypes = {
            id: sub,
        };
        return next();
    } catch (error) {
        throw new Error('Invalid token');
    }
}
