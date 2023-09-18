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

    static async buscarPedidoPorCliente(cliente){
        const response = await RepositoryGeneral.buscarPedidoPorCliente(Pedidos, cliente)
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

    static async deletaPedidoPorCliente(cliente){
        const response = await RepositoryGeneral.deletaPedidoPorCliente(Pedidos, cliente)
        return response
    }

}

export default PedidosRepository