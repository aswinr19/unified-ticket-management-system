import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import User from '../models/User';

const createUser = (req: Request, res: Response, next: NextFunction) => {};
const readUser = (req: Request, res: Response, next: NextFunction) => {};
const readAllUser = (req: Request, res: Response, next: NextFunction) => {};
const updateUser = (req: Request, res: Response, next: NextFunction) => {};
const deleteUser = (req: Request, res: Response, next: NextFunction) => {};
const login = (req: Request, res: Response, next: NextFunction) => {};

export default {
    createUser,
    readUser,
    readAllUser,
    updateUser,
    deleteUser,
    login
};
