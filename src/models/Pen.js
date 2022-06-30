import mongooseDB from './db.js';
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const penSchema = new Schema({
    id: Number,
    name: String,
});

const pen = mongoose.model('pens', penSchema);

export default pen;
