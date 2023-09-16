import PedidosRepository from "../Repository/PedidosRepository.js";
import ValidacoesPedido from "../services/ValidacoesPedidos.js";

class PedidosController {

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
          

        app.get("/pedidos", async (req, res) => {
            try {
                const pedidos = await PedidosRepository.buscarTodosOsPedidos()
                res.status(200).json(pedidos)
            } catch (erro) {
                res.status(404).json(erro.message)
            }
        })

        app.get("/pedidos/:id", async (req, res) => {
            try {
                const pedido = await PedidosRepository.buscarPedidoPorId(req.params.id)

                if (!pedido._id) {
                    throw new Error("pedido não encontrado para esse id")
                }
                res.status(200).json(pedido)
            } catch (erro) {
                res.status(404).json({ message: erro.message, id: req.params.id })
            }
        })

        app.post("/pedido", async (req, res) => {
            try {
                await ValidacoesPedido.validaPedido(req.body.nome, req.body.telefone, req.body.email, req.body.cnpj, req.body.endereco)

                const cliente = req.body

                const inserir = await PedidosRepository.criarPedido(pedido)

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

        app.delete("/pedidos/:id", async (req, res) => {
            const id = req.params.id
            try {

                const pedido = await PedidosRepository.buscarPedidoPorId(id)

                if (!pedido._id) {
                    throw new Erro("Pedido não encontrado")
                }

                const resposta = await PedidosRepository.deletaPedidoPorId(id)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(404).json({ Erro: erro.message, id })
            }
        })

        app.patch("/pedidos/:id", async (req, res) => {
            const id = req.params.id
            const body = Object.entries(req.body)
            try {
                const pedido = req.body

                if (!pedido._id) {
                    throw new Error("pedido não encontrado para esse id")
                }

                body.forEach((elemento) => pedido[elemento[0]] = elemento[1])

                delete pedido._id

                ValidacoesPedido.validaPedido(pedido.nome, pedido.telefone, pedido.email, pedido.cnpj, pedido.endereco)
                const resposta = await PedidosRepository.atualizaPedidoPorId(id, pedido)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(400).json({ message: erro.message, id })
            }

        })
    }
}

export default PedidosController