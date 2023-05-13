import mongoose, { Document, Schema } from 'mongoose';

export interface Event {}

export interface EventModel extends Event, Document {}

const EventSchema: Schema = new Schema({}, { timestamps: true });

export default mongoose.model<EventModel>('Event', EventSchema);
