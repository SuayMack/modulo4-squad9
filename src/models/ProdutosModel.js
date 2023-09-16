import mongoose from 'mongoose'

/**
 * Objeto modelo para usuários
 */

const Produtos = mongoose.model('Produtos', {    

    categoria : String,
    tipo : String,
    descricao : String,
    valor: String
})




export default Produtos