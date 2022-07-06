import mongoose from 'mongoose';
import Inc from "mongoose-sequence";

// const mongodb_connect = process.env.DB_CONNECTION + "://" + process.env.DB_HOST + ":" + process.env.DB_PORT + '/' + process.env.DB_DATABASE;
const mongodb_connect = process.env.DB_URL;
const AutoIncrement = Inc(mongoose); 

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(mongodb_connect);
}

export {main, AutoIncrement};
