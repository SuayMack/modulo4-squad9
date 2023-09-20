import mongoose from 'mongoose'

const Feedbacks = mongoose.model('Feedbacks', {
  cliente: String,
  produto: String,
  descricao: String,
})

export default Feedbacks