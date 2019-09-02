import * as mongoose from 'mongoose';

export const AuthorSchema = new mongoose.Schema({
    id: String,
    username: String,
});
