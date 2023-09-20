import mongoose from "mongoose"

const Contratos = mongoose.model('contrato', {
    pedido: String,
    descricao: String,
    inicio: Date,
    fim: Date
})


export default Contratos