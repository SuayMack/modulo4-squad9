import { Double } from "bson"
import mongoose from "mongoose"

const Pedidos = mongoose.model('Pedido', {
    cliente: String,
    produto: String,
    descricao: String

})

export default Pedidos

