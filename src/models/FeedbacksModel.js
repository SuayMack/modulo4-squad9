import mongoose from 'mongoose'

const Feedbacks = mongoose.model('Feedbacks', {    
  id_pedido : String,
  descricao : String
})

export default Feedbacks