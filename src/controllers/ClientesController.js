import ClientesRepository from "../Repository/ClientesRepository.js"
import ValidacoesClientes from "../services/ValidacoesClientes.js"
import ValidacoesCLientes from "../services/ValidacoesClientes.js"

class ClientesController {

    /**
     * Método de rotas da entidade usuários
     * recebendo como argumento a instancia do Express
     * @param {Express} app 
     * usa-se o static para não precisar instanciar a classe
     * 
     * req e res são dois objetos muito importantes que representam uma solicitação do cliente 
     * (navegador, aplicativo móvel, etc.) para o servidor e a resposta que o servidor envia de 
     * volta para o cliente, respectivamente.
     */
    static rotas(app) {

        app.post("/cliente", async (req, res) => {
            try {
                await ValidacoesCLientes.validaCliente(req.body.nome, req.body.telefone, req.body.email, req.body.cnpj, req.body.endereco)

                const cliente = req.body

                const inserir = await ClientesRepository.criarCliente(cliente)

                res.status(201).json(inserir)

            } catch (erro) {

                if (erro.message == "Email já cadastrado.") {
                    res.status(406).json({ message: erro.message })
                }

                res.status(400).json({ message: erro.message })

            }
        })

        app.get("/clientes", async (req, res) => {
            try {
                const clientes = await ClientesRepository.buscarTodosOsClientes()
                res.status(200).json(clientes)
            } catch (erro) {
                res.status(404).json(erro.message)
            }
        })

        app.get("/cliente/:id", async (req, res) => {
            try {
                const cliente = await ClientesRepository.buscarClientePorId(req.params.id)

                if (!cliente._id) {
                    throw new Error("Cliente não encontrado para esse id")
                }
                res.status(200).json(cliente)
            } catch (erro) {
                res.status(404).json({ message: erro.message, id: req.params.id })
            }
        })

        app.delete("/cliente/:id", async (req, res) => {
            const id = req.params.id
            try {

                const cliente = await ClientesRepository.buscarClientePorId(id)

                if (!cliente._id) {
                    throw new Erro("Cliente não encontrado")
                }

                const resposta = await ClientesRepository.deletaClientePorId(id)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(404).json({ Erro: erro.message, id })
            }
        })

        app.patch("/cliente/:id", async (req, res) => {
            const id = req.params.id
            const entries = Object.entries(req.body)
            try {
                const cliente = req.body

                await ValidacoesClientes.validaAtualizacaoCliente(entries)

                const resposta = await ClientesRepository.atualizaClientePorId(id, cliente)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(400).json({ message: erro.message, id })
            }

        })
    }
}

export default ClientesController