class ValidacoesProdutos {
  

  static validaNome(nome) {
    if (nome === "Software" || nome === "APP" || nome ===  "Site") {
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
  static async validaProduto(nome, descricao) {
    try {
      ValidacoesProdutos.validaNome(nome)
      ValidacoesProdutos.validaDescricao(descricao)
    } catch (error) {
      throw error
    }
  }
}

export default ValidacoesProdutos
