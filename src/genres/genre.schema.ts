import * as mongoose from 'mongoose';

export const GenreSchema = new mongoose.Schema({
    _id: { 
        type: mongoose.Schema.ObjectId,
        auto: true
    },
    name: String,
});