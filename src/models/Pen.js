import mongooseDB from './db.js';
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const penSchema = new Schema({
    contract : String,
    owner_id : Number,
    name: String,
    quality : String,
    level : Number,
    effect : Number,
    resilience : Number,
    number_of_mints: Number,
    durability : Number
});

const pen = mongoose.model('pens', penSchema);

export default pen;
