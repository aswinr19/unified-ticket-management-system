import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { generateFromEmail } from 'unique-username-generator';
import User from '../models/User';

const generateUserName = (email: string): string => {
    return generateFromEmail(email, 4);
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email, phone, password } = req.body;
    const userName = generateUserName(email);

    try {
        const user = await User.create({
            firstName,
            lastName,
            userName,
            email,
            phone,
            password
        });

        res.status(201).json({ user });
    } catch (error) {
        res.status(400).json({ error });
    }
};

const readUser = async (req: Request, res: Response, next: NextFunction) => {};

const readAllUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await User.find().select(
            '-password -_id -createdAt -updatedAt -__v '
        );
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error });
    }
};

const updateUser = (req: Request, res: Response, next: NextFunction) => {};
const deleteUser = (req: Request, res: Response, next: NextFunction) => {};

const login = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
};

export default {
    createUser,
    readUser,
    readAllUser,
    updateUser,
    deleteUser,
    login
};
