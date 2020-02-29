import * as mongoose from 'mongoose';

export const GenreSchema = new mongoose.Schema({
    id: Number,
    genre: String,
});