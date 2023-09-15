import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv'

config()

const app = express();

const port = process.env.PORT || 1109
const USER_DB = process.env.USER_DB || "local"
const DATABASE = process.env.DATABASE || "local"
const PASSWORD = process.env.PASSWORD || "local"
const CLUSTER = process.env.CLUSTER || "local"

mongoose.connect(`mongodb+srv://${USER_DB}:${PASSWORD}@${CLUSTER}.${DATABASE}.mongodb.net/`)
.then(()=>{
  app.listen(port, () => {
    console.log(`Server is running on port ${port} 🚀✈️`)
  });
})
.catch((e)=>console.log(e.message))