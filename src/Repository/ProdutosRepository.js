import Produtos from "../models/ProdutosModel.js";
import RepositoryGeneral from "./RepositoryGeneral.js";

class ProdutosRepository {
    static async criarProduto(produto){
        const response =  await RepositoryGeneral.criar(Produtos, produto)
        return response
    }

    static async buscarTodosOsProdutos(){
        const response = await RepositoryGeneral.buscarTodos(Produtos)
        return response
    }

    static async buscarProdutoPorId(id){
        const response = await RepositoryGeneral.buscarPorId(Produtos, id)
        return response
    }

    static async atualizaProdutoPorId(id, produto){
        const response = await RepositoryGeneral.atualizaPorId(Produtos, id, produto)
        return response
    }

    static async deletaProdutoPorId(id){
        const response = await RepositoryGeneral.deletarPorId(Produtos, id)
        return response
    }
}

export default ProdutosRepository;