import mongoose from 'mongoose'

const Feedbacks = mongoose.model('Feedbacks', {
  descricao : String
})

export default Feedbacks