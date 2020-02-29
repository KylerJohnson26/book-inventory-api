import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
    id: Number,
    title: String,
    author: Number,
    genre: String,
    dateCreated: Date
});