import mongoose from "mongoose"
/**
 * Objeto modelo para usuários
 */

const Contratos = mongoose.model('contrato', {
    Pedido: String,
    descricao: String,
    inicio: Date,
    fim: Date
})


export default Contratos