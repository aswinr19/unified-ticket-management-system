import mongoose, { Document, Schema } from 'mongoose';

export interface Parking {}

export interface ParkingModel extends Parking, Document {}

const ParkingSchema: Schema = new Schema({}, { timestamps: true });

export default mongoose.model<ParkingModel>('Parking', ParkingSchema);
