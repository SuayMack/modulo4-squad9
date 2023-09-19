import PedidosModel from "../models/PedidosModel.js";
import PedidosRepository from "../Repository/PedidosRepository.js";
import ValidacoesPedido from "../services/ValidacoesPedidos.js";

class PedidosController {

    static rotas(app) {
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
        
        app.get("/pedidos/:cliente", async (req, res) => {
            try {
                const pedido = await PedidosRepository.buscarPedidoPorCliente(req.params.cliente)

                if (!pedido.cliente) {
                    throw new Error("pedido não encontrado para este cliente")
                }
                res.status(200).json(pedido)
            } catch (erro) {
                res.status(404).json({ message: erro.message, cliente: req.params.cliente })
            }
        })

        app.post("/pedido", async (req, res) => {
            try {
                await ValidacoesPedido.validaPedido(req.body.cliente, req.body.produto, req.body.descricao)

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

        app.delete("/pedidos/:cliente", async (req, res) => {
            const cliente = req.params.cliente
            try {

                const pedido = await PedidosRepository.deletaPedidoPorCliente(cliente)

                if (!pedido.cliente) {
                    throw new Erro("Pedido não encontrado")
                }

                const resposta = await PedidosRepository.deletaPedidoPorCliente(cliente)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(404).json({ Erro: erro.message, cliente })
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

                ValidacoesPedido.validaPedido(pedido.cliente, pedido.produto, pedido.descricao)
                const resposta = await PedidosRepository.atualizaPedidoPorId(id, pedido)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(400).json({ message: erro.message, id })
            }

        })
    }
}

export default PedidosController