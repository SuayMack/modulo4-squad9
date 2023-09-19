import Feedbacks from "../models/FeedbacksModel.js";
import RepositoryGeneral from "./RepositoryGeneral.js";

class FeedbacksRepository {
    static async criarFeedback(feedback){
        const response =  await RepositoryGeneral.criar(Feedbacks, feedback)
        return response
    }

    static async buscarTodosOsFeedbacks(){
        const response = await RepositoryGeneral.buscarTodos(Feedbacks)
        return response
    }

    static async buscarFeedbackPorId(id){
        const response = await RepositoryGeneral.buscarPorId(Feedbacks, id)
        return response
    }

    static async buscarFeedbackPorCliente(cliente){
        const response = await RepositoryGeneral.buscarFeedbackPorCliente(Feedbacks, cliente)
        return response
    }

    static async buscarFeedbackPorProduto(produto){
        const response = await RepositoryGeneral.buscarFeedbackPorProduto(Feedbacks, produto)
        return response
    }

    static async atualizaFeedbackPorId(id, feedback){
        const response = await RepositoryGeneral.atualizaPorId(Feedbacks, id, feedback)
        return response
    }

    static async deletaFeedbackPorId(id){
        const response = await RepositoryGeneral.deletarPorId(Feedbacks, id)
        return response
    }

    static async deletaFeedbackPorCliente(cliente){
        const response = await RepositoryGeneral.deletaFeedbackPorCliente(Feedbacks, cliente)
        return response
    }
    
    static async deletaFeedbackPorProduto(produto){
        const response = await RepositoryGeneral.deletaFeedbackPorProduto(Feedbacks, produto)
        return response
    }
}

export default FeedbacksRepository;