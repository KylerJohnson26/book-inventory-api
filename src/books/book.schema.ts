import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
    _id: { 
        type: mongoose.Schema.ObjectId,
        auto: true
    },
    title: String,
    author: String,
    genre: String,
    price: Number,
    dateAdded: { type: Date, default: Date.now }
});