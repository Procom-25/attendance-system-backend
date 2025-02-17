import express from 'express'
import connectdb from './config/databaseConnection.js'
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import testRoutes from './routes/testRoutes.js'
import Event from './models/eventModel.js';
connectdb();
const app=express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/user',userRoutes);
app.use('/admin',adminRoutes);
app.use('/test4594', testRoutes);


const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
