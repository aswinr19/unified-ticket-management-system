import mongoose, { Document, Schema } from 'mongoose';

export interface Location {}

export interface LocationModel extends Location, Document {}

const LocationSchema: Schema = new Schema({}, { timestamps: true });

export default mongoose.model<LocationModel>('Location', LocationSchema);
