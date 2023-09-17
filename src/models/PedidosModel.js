import { Double } from "bson"
import mongoose from "mongoose"

const Pedidos = mongoose.model('Pedido', {
    produto: String,
    cliente: String,
    tipo: String,
    valor: Double,
    descricao: String

})

export default Pedidos

