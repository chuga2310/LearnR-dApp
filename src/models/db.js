import mongoose from 'mongoose';
// const mongodb_connect = process.env.DB_CONNECTION + "://" + process.env.DB_HOST + ":" + process.env.DB_PORT + '/' + process.env.DB_DATABASE;
const mongodb_connect = process.env.DB_URL;
mongoose.connect(mongodb_connect);

export default mongoose

