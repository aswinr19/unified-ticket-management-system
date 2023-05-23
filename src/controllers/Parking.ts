import { NextFunction, Request, Response } from 'express';
import Parking from '../models/Parking';

const createParking = (req: Request, res: Response, next: NextFunction) => {};
const readParking = (req: Request, res: Response, next: NextFunction) => {};
const readAllParking = (req: Request, res: Response, next: NextFunction) => {};
const updateParking = (req: Request, res: Response, next: NextFunction) => {};
const deleteParking = (req: Request, res: Response, next: NextFunction) => {};

export default {
    createParking,
    readParking,
    readAllParking,
    updateParking,
    deleteParking
};
