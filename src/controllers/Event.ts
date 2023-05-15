import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Event from '../models/Event';

const createEvent = (req: Request, res: Response, next: NextFunction) => {};
const readEvent = (req: Request, res: Response, next: NextFunction) => {};
const readAllEvent = (req: Request, res: Response, next: NextFunction) => {};
const updateEvent = (req: Request, res: Response, next: NextFunction) => {};
const deleteEvent = (req: Request, res: Response, next: NextFunction) => {};

export default {
    createEvent,
    readEvent,
    readAllEvent,
    updateEvent,
    deleteEvent
};
