import { Double } from "bson"
import mongoose from "mongoose"

const Pedidos = mongoose.model('Pedido', {

    descricao: String

})

export default Pedidos

