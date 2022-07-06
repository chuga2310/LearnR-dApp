import {main, AutoIncrement} from './db.js';
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const penSchema = new Schema({
    contract: String,
    owner: String,
    name: { type :String, required : true },
    quality: { type :String, required : true },
    level: { type :Number, required : true },
    effect: { type :Number, required : true },
    resilience: { type :Number, required : true },
    number_of_mints: { type :Number, required : true },
    durability: { type :Number, required : true }
});

penSchema.plugin(AutoIncrement, {inc_field: "id" });

const pen = mongoose.model('pens', penSchema);

export default pen;
