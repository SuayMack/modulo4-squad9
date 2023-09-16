import Pedidos from "../models/PedidosModel.js";
import RepositoryGeneral from "./RepositoryGeneral.js";

class PedidosRepository {
    static async criarPedido(pedido){
        const response =  await RepositoryGeneral.criar(Pedidos, pedido)
        return response
    }

    static async buscarTodosOsPedidos(){
        const response = await RepositoryGeneral.buscarTodos(Pedidos)
        return response
    }

    static async buscarPedidoPorId(id){
        const response = await RepositoryGeneral.buscarPorId(Pedidos, id)
        return response
    }

    static async buscarPedidoPorEmail(email){
        const response = await RepositoryGeneral.buscarPorChave(Pedidos, 'email', email)
        return response
    }

    static async atualizaPedidoPorId(id, pedido){
        const response = await RepositoryGeneral.atualizaPorId(Pedidos, id, pedido)
        return response
    }

    static async deletaPedidoPorId(id){
        const response = await RepositoryGeneral.deletarPorId(Pedidos, id)
        return response
    }
}

export default PedidosRepository;