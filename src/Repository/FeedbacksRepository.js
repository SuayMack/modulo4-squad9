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

    static async atualizaFeedbackPorId(id, feedback){
        const response = await RepositoryGeneral.atualizaPorId(Feedbacks, id, feedback)
        return response
    }

    static async deletaFeedbackPorId(id){
        const response = await RepositoryGeneral.deletarPorId(Feedbacks, id)
        return response
    }
}

export default FeedbacksRepository;