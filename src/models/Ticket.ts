import mongoose, { Document, Schema } from 'mongoose';

export interface Ticket {}

export interface TicketModel extends Ticket, Document {}

const TicketSchema: Schema = new Schema({}, { timestamps: true });

export default mongoose.model<TicketModel>('Ticket', TicketSchema);
