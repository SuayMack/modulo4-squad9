import Clientes from "../models/ClientesModel.js"
import RepositoryGeneral from "./RepositoryGeneral.js"

class ClientesRepository {
    static async criarCliente(cliente){
        const response =  await RepositoryGeneral.criar(Clientes, cliente)
        return response
    }

    static async buscarTodosOsClientes(){
        const response = await RepositoryGeneral.buscarTodos(Clientes)
        return response
    }

    static async buscarClientePorId(id){
        const response = await RepositoryGeneral.buscarPorId(Clientes, id)
        return response
    }

    static async buscarClientePorEmail(email){
        const response = await RepositoryGeneral.buscarPorChave(Clientes, 'email', email)
        return response
    }
    
    static async atualizaClientePorId(id, cliente){
        const response = await RepositoryGeneral.atualizaPorId(Clientes, id, cliente)
        return response
    }

    static async deletaClientePorId(id){
        const response = await RepositoryGeneral.deletarPorId(Clientes, id)
        return response
    }
}

export default ClientesRepository;