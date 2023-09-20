import ClientesRepository from '../Repository/ClientesRepository.js'

class ValidacoesCliente {
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

    static async validaEmailPatch(emailPatch) {
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



    static async validaCliente(nome, telefone, email, cnpj, endereco) {
        try {
            ValidacoesCliente.validaNome(nome)
            ValidacoesCliente.validaTelefone(telefone)
            await ValidacoesCliente.validaEmail(email)
            ValidacoesCliente.validaCNPJ(cnpj)
            ValidacoesCliente.validaEndereco(endereco)
        } catch (error) {
            throw error
        }
    }
    static async validaAtualizacaoCliente(nome, telefone, emailPatch, cnpj, endereco) {
        try {
            ValidacoesCliente.validaNome(nome)
            ValidacoesCliente.validaTelefone(telefone)
            ValidacoesCliente.validaEmailPatch(emailPatch)
            ValidacoesCliente.validaCNPJ(cnpj)
            ValidacoesCliente.validaEndereco(endereco)
        } catch (error) {
            throw error
        }
    }
}

export default ValidacoesCliente

