import {main, AutoIncrement, paginate} from './db.js';
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const tokenAccessSchema = new Schema({
    token: String,
    is_active: Boolean,
});

const token_access = mongoose.model('token_access', tokenAccessSchema);

export default token_access;
