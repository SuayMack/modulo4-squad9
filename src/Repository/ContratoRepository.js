import Contratos from "../models/ContratoModel.js";
import RepositoryGeneral from "./RepositoryGeneral.js";

class ContratosRepository {
    static async criarContrato(contrato){
        const response =  await RepositoryGeneral.criar(Contratos, contrato)
        return response
    }

    static async buscarTodosOsContratos(){
        const response = await RepositoryGeneral.buscarTodos(Contratos)
        return response
    }

    static async buscarContratoPorId(id){
        const response = await RepositoryGeneral.buscarPorId(Contratos, id)
        return response
    }

    static async buscarClientePorEmail(email){
        const response = await RepositoryGeneral.buscarPorChave(Clientes, 'email', email)
        return response
    }

    static async atualizaContratoPorId(id, contrato){
        const response = await RepositoryGeneral.atualizaPorId(Contratos, id, contrato)
        return response
    }

    static async deletaContratoPorId(id){
        const response = await RepositoryGeneral.deletarPorId(Contratos, id)
        return response
    }
}

export default ContratosRepository;