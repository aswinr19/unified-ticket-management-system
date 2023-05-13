import mongoose, { Document, Schema } from 'mongoose';

export interface Attraction {}

export interface AttractionModel extends Attraction, Document {}

const AttractionSchema: Schema = new Schema({}, { timestamps: true });

export default mongoose.model<AttractionModel>('Attraction', AttractionSchema);
