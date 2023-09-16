import mongoose from "mongoose";

class RepositoryGeneral {
  static async criar(EntidadeMongo, input) {
    await EntidadeMongo.create(input)
    return { Sucesso: "Registro inserido com sucesso!" }
  }

  static async buscarTodos(EntidadeMongo) {
    const response = await EntidadeMongo.find()
    return response
  }

  static async buscarPorId(EntidadeMongo, id) {
    const response = await EntidadeMongo.findOne({ _id: id })
    return response
  }

  static async atualizaPorId(EntidadeMongo, id, input) {
    await EntidadeMongo.updateOne({ _id: id }, input)
    return { message: "Registro atualizado com sucesso", id }
  }

  static async deletarPorId(EntidadeMongo, id) {
    await EntidadeMongo.findOneAndDelete({ _id: id })
    return { message: "Registro deletado com sucesso", id }
  }

  static async buscarPorChave(EntidadeMongo, chave, value) {
    const response = await EntidadeMongo.findOne({ [chave]: value })
    return response
  }
  static async atualizarPorChave(EntidadeMongo, chave, value, input) {
    await EntidadeMongo.updateOne({ [chave]: value }, input)
    return { message: "Registro atualizado com sucesso", value }
  }
}

export default RepositoryGeneral;