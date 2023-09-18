import PedidosRepository from "../Repository/PedidosRepository.js";

class ValidacoesPedidos {

    static validaDescricao(descricao) {

        if (descricao.length >= 20 && descricao.length <= 350) {
            return true
        }
        else {
            throw new Error("A descrição deve conter no mínimo 20 e no máximo 350 caracteres")
        }

    }

    static async validapedido(descricao) {
        try {
            ValidacoesPedidos.validaDescricao(descricao)

        } catch (error) {
            throw error
        }
    }
}

export default ValidacoesPedidos

