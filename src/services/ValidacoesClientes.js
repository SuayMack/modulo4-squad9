import ClientesRepository from '../Repository/ClientesRepository.js'

class ValidacoesClientes {
    static validaNome(nome) {
        if (nome.length >= 3) {
            return true
        }
        else {
            throw new Error("Nome inválido, o nome deve ter no mínimo 3 caracteres")
        }
    }

    static validaTelefone(telefone) {
        const tel = parseInt(telefone)
        if (tel != telefone || telefone.length < 10 || telefone.length > 12) {
            throw new Error("Telefone inválido, favor rever a requisição.")
        }
        return true
    }

    static async validaEmail(email) {
        const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        if (regex.test(email)) {
            const VerificaCliente = await ClientesRepository.buscarClientePorEmail(email)
            if (VerificaCliente) {
                throw new Error("Email já cadastrado.")
            } else {
                return true
            }
        }
        else {
            throw new Error("Email inválido, favor rever a requisição.")
        }
    }

    static validaEmailPatch(emailPatch) {
        const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        if (regex.test(emailPatch)) {
            return true
        }
        else {
            throw new Error("Email inválido, favor rever a requisição.")
        }
    }

    static validaCNPJ(cnpj) {
        if (cnpj.length != 14) {
            throw new Error("CNPJ inválido, favor rever a requisição.")
        }
        return true
    }

    static validaEndereco(endereco) {
        if (endereco.length >= 5) {
            return true
        }
        else {
            throw new Error("Endereco inválido, deve ter no mínimo 5 caracteres")
        }
    }
    static async validaClientePorChave(key, value) {
        try {
            switch (key) {
                case "nome":
                    this.validaNome(value)
                    break;
                case "telefone":
                    this.validaTelefone(value)
                    break;
                case "cnpj":
                    this.validaCNPJ(value)
                    break;
                case "endereco":
                    this.validaEndereco(value)
                    break;
                case "email":
                    await this.validaEmail(value)
                    break;
                default:
                    throw new Error("Favor rever a requisição.")
            }
        } catch (error) {

            throw error
        }
        return true
    }


    static async validaCliente(nome, telefone, email, cnpj, endereco) {
        try {
            ValidacoesClientes.validaNome(nome)
            ValidacoesClientes.validaTelefone(telefone)
            await ValidacoesClientes.validaEmail(email)
            ValidacoesClientes.validaCNPJ(cnpj)
            ValidacoesClientes.validaEndereco(endereco)
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    static async validaAtualizacaoCliente(body) {

        try {

          for (const entradas of body) {
            await this.validaClientePorChave(...entradas)
          }
            
        } catch (error) {
            
            throw error

        }

    }
}

export default ValidacoesClientes

