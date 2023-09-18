import mongoose from 'mongoose'

const Produtos = mongoose.model('Produtos', {    
    nome : String, //Software, APP, Site
    descricao : String
})

export default Produtos