import mongoose from "mongoose"
/**
 * Objeto modelo para usuários
 */

const Contratos = mongoose.model('contrato', {
    descricao: String,
    inicio: Date,
    fim: Date
})


export default Contratos