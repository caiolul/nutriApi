import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import UploadConf from '../config/update';
import Users from '../models/Users';

interface Request {
    userId: string;
    avatarName: string;
}

class AvatarUpdateServices {
    public async execute({ userId, avatarName }: Request): Promise<Users> {
        const userRepo = getRepository(Users);
        const checkUser = await userRepo.findOne(userId);
        if (!checkUser) {
            throw new Error(
                'User not found or not authenticated cant change avatar',
            );
        }
        if (checkUser.avatar) {
            const userAvatarPath = path.join(
                UploadConf.directory,
                checkUser.avatar,
            );
            const userAvatarExist = await fs.promises.stat(userAvatarPath);
            if (userAvatarExist) {
                await fs.promises.unlink(userAvatarPath);
            }
        }
        checkUser.avatar = avatarName;
        await userRepo.save(checkUser);
        return checkUser;
    }
}

export default AvatarUpdateServices;
