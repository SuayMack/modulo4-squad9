import mongoose from 'mongoose'

const Clientes = mongoose.model('Cliente', {    
  nome : String,
  telefone : String,
  email : String,
  cnpj : String,
  endereco : String
})

export default Clientes