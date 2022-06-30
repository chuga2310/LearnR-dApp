import mongoose from 'mongoose';
// const mongodb_connect = process.env.DB_CONNECTION + "://" + process.env.DB_HOST + ":" + process.env.DB_PORT + '/' + process.env.DB_DATABASE;
const mongodb_connect = process.env.DB_URL;

main().catch(err => console.log(err));

export default async function main() {
    await mongoose.connect(mongodb_connect);
}

