import ContratosRepository from "../Repository/ContratoRepository.js";
import ValidacoesContrato from "../services/ValidacoesContrato.js";

class ContratoController {

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
        /**
        * Rota para página inicial
        */
        app.get('/', function (req, res) {
            res.send('Hello World')
        })
          

        app.get("/contratos", async (req, res) => {
            try {
                const contratos = await ContratosRepository.buscarTodosOsContratos()
                res.status(200).json(contratos)
            } catch (erro) {
                res.status(404).json(erro.message)
            }
        })

        app.get("/contratos/:id", async (req, res) => {
            try {
                const contrato = await ContratosRepository.buscarContratoPorId(req.params.id)

                if (!contrato._id) {
                    throw new Error("Contrato não encontrado para esse id")
                }
                res.status(200).json(contrato)
            } catch (erro) {
                res.status(404).json({ message: erro.message, id: req.params.id })
            }
        })

        app.post("/contratos", async (req, res) => {
            try {
                await ValidacoesContrato.validaContrato(req.body.nome, req.body.telefone, req.body.email, req.body.cnpj, req.body.endereco)

                const contrato = req.body

                const inserir = await ContratosRepository.criarContrato(contrato)

                res.status(201).json(inserir)

            } catch (erro) {
                
                if(erro.message == "Email já cadastrado."){
                    res.status(406).json({message: erro.message})
                }
                else {
                    res.status(400).json({message: erro.message})
                }
            }
        })

        app.delete("/contrato/:id", async (req, res) => {
            const id = req.params.id
            try {

                const contrato = await ContratosRepository.buscarContratoPorId(id)

                if (!contrato._id) {
                    throw new Erro("Contrato não encontrado")
                }

                const resposta = await ContratosRepository.deletaContratoPorId(id)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(404).json({ Erro: erro.message, id })
            }
        })

        app.patch("/contratos/:id", async (req, res) => {
            const id = req.params.id
            const body = Object.entries(req.body)
            try {
                const contrato = req.body

                if (!contrato._id) {
                    throw new Error("Contrato não encontrado para esse id")
                }

                body.forEach((elemento) => contrato[elemento[0]] = elemento[1])

                delete contrato._id

                ValidacoesContrato.validaContrato(contrato.nome, cliente.telefone, cliente.email, cliente.cnpj, cliente.endereco)
                const resposta = await ContratosRepository.atualizaClientePorId(id, contrato)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(400).json({ message: erro.message, id })
            }

        })
    }
}
export default ContratoController