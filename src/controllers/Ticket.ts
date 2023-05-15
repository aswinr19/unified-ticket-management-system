import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Ticket from '../models/Ticket';

const createTicket = (req: Request, res: Response, next: NextFunction) => {};
const readTicket = (req: Request, res: Response, next: NextFunction) => {};
const readAllTicket = (req: Request, res: Response, next: NextFunction) => {};
const updateTicket = (req: Request, res: Response, next: NextFunction) => {};
const deleteTicket = (req: Request, res: Response, next: NextFunction) => {};

export default {
    createTicket,
    readTicket,
    readAllTicket,
    updateTicket,
    deleteTicket
};
