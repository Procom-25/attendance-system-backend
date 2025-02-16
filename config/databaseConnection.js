import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const connectdb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Mongodb is succesfully connected');
    }
    catch(error)
    {
        console.error(error.message);
        throw new Error('Error While Connecting to database')
        process.exit(1);
    }
}
export default connectdb