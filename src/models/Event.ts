import mongoose, { Document, Schema } from 'mongoose';

export interface Event {
  eventName: string,
  eventDate: string,
  venue: string,
  category: string,
  totalSeats: number,
  seatCategory: number
}

export interface EventModel extends Event, Document {}

const EventSchema: Schema = new Schema({}, { timestamps: true });

export default mongoose.model<EventModel>('Event', EventSchema);
