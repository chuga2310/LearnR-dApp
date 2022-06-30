import mongooseDB from './db.js';
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: Number,
    name: String,
    energy: Number,
    number_of_pens: Number
});

const User = mongooseDB.model('User', UserSchema);

export default User;
