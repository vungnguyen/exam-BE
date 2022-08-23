import express from 'express';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import {routes} from "./src/routes/routes";
import cors from 'cors';

const PORT = 3000;
const app = express();
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/employee').then(()=>{
    console.log('connect success')
}).catch(err => {
    console.log(err);
})
app.use(cors());
app.use('',routes)
app.listen(PORT,() => {
    console.log(`server running at http://localhost:${PORT}`);
});