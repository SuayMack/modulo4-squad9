class ValidacoesFeedbacks {

    static validaCliente(cliente) {

        if (cliente.length >= 3) {
            return true
        }
        else {
            throw new Error("O nome do cliente deve conter ao menos 3 caracteres")
        }

    }

    static validaProduto(produto) {
        if (produto === "Software" || produto === "APP" || produto === "Site") {
            return true
        }
        else {
            throw new Error("Produto inválido, o produto deve ser Software, APP ou Site")
        }
    }
    static validaDescricao(descricao) {
        if (descricao.length >= 20 && descricao.length <= 350) {
            return true
        }
        else {
            throw new Error("A descrição deve conter no mínimo 20 e no máximo 350 caracteres")
        }
    }

    static validaFeedbacks(cliente, produto,descricao) {
        try {
            
            ValidacoesFeedbacks.validaCliente(cliente)
            ValidacoesFeedbacks.validaProduto(produto)
            ValidacoesFeedbacks.validaDescricao(descricao)

        }
        catch (error) {
            throw error
        }
    }
}
export default ValidacoesFeedbacks;