import { NextFunction, Request, Response } from 'express';
import Attraction from '../models/Attraction';

const createAttraction = (
    req: Request,
    res: Response,
    next: NextFunction
) => {};
const readAttraction = (req: Request, res: Response, next: NextFunction) => {};
const readAllAttraction = (
    req: Request,
    res: Response,
    next: NextFunction
) => {};
const updateAttraction = (
    req: Request,
    res: Response,
    next: NextFunction
) => {};
const deleteAttraction = (
    req: Request,
    res: Response,
    next: NextFunction
) => {};

export default {
    createAttraction,
    readAttraction,
    readAllAttraction,
    updateAttraction,
    deleteAttraction
};
