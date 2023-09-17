import express from 'express'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import cors from "cors"

import ClientesController from './src/controllers/ClientesController.js'
import ProdutosController from './src/controllers/ProdutosController.js'
import PedidosController from './src/controllers/PedidosController.js'
import ContratoController from './src/controllers/ContratoController.js'
import FeedbacksController from './src/controllers/FeedbacksController.js'

config()

const app = express();

app.use(express.json())
app.use(cors("*"))

const port = process.env.PORT || 3000
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

ClientesController.rotas(app)
ProdutosController.rotas(app)
PedidosController.rotas(app)
ContratoController.rotas(app)
FeedbacksController.rotas(app)
