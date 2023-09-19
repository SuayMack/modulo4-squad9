import FeedbacksRepository from "../Repository/FeedbacksRepository.js"
import ValidacoesFeedbacks from "../services/ValidacoesFeedbacks.js"


class FeedbacksController {

    static rotas(app) {
        app.get("/feedbacks", async (req, res) => {
            try {
                const feedbacks = await FeedbacksRepository.buscarTodosOsFeedbacks()
                res.status(200).json(feedbacks)
            } catch (erro) {
                res.status(404).json(erro.message)
            }
        })

        app.get("/feedbacks/:id", async (req, res) => {
            try {
                const feedback = await FeedbacksRepository.buscarFeedbackPorId(req.params.id)

                if (!feedback._id) {
                    throw new Error("Feedback não encontrado para esse id")
                }
                res.status(200).json(feedback)
            } catch (erro) {
                res.status(404).json({ message: erro.message, id: req.params.id })
            }
        })

        app.get("/feedbacks/:cliente", async (req, res) => {
            try {
                const feedback = await FeedbacksRepository.buscarFeedbackPorCliente(req.params.cliente)

                if (!feedback.cliente) {
                    throw new Error("Feedback não encontrado para esse cliente")
                }
                res.status(200).json(feedback)
            } catch (erro) {
                res.status(404).json({ message: erro.message, cliente: req.params.cliente })
            }
        })

        app.get("/feedbacks/:produto", async (req, res) => {
            try {
                const feedback = await FeedbacksRepository.buscarFeedbackPorProduto(req.params.produto)

                if (!feedback.produto) {
                    throw new Error("Feedback não encontrado para esse produto")
                }
                res.status(200).json(feedback)
            } catch (erro) {
                res.status(404).json({ message: erro.message, produto: req.params.produto })
            }
        })

        app.post("/feedbacks", async (req, res) => {
            try {
                await ValidacoesFeedbacks.validaFeedback(req.body.nome, req.body.telefone, req.body.email, req.body.cnpj, req.body.endereco)

                const feedback = req.body

                const inserir = await FeedbacksRepository.criarFeedback(feedback)

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

        app.delete("/feedbacks/:id", async (req, res) => {
            const id = req.params.id
            try {

                const feedback = await FeedbacksRepository.buscarFeedbackPorId(id)

                if (!feedback._id) {
                    throw new Erro("Feedback não encontrado")
                }

                const resposta = await FeedbacksRepository.deletaFeedbackPorId(id)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(404).json({ Erro: erro.message, id })
            }
        })

        app.delete("/feedbacks/:cliente", async (req, res) => {
            const cliente = req.params.cliente
            try {

                const feedback = await FeedbacksRepository.buscarFeedbackPorCliente(cliente)

                if (!feedback.cliente) {
                    throw new Erro("Feedback não encontrado")
                }

                const resposta = await FeedbacksRepository.deletaFeedbackPorcliente(cliente)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(404).json({ Erro: erro.message, cliente })
            }
        })

        app.delete("/feedbacks/:produto", async (req, res) => {
            const produto = req.params.produto
            try {

                const feedback = await FeedbacksRepository.buscarFeedbackPorProduto(produto)

                if (!feedback.produto) {
                    throw new Erro("Feedback não encontrado")
                }

                const resposta = await FeedbacksRepository.deletaFeedbackPorproduto(produto)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(404).json({ Erro: erro.message, produto })
            }
        })

        app.patch("/feedbacks/:id", async (req, res) => {
            const id = req.params.id
            const body = Object.entries(req.body)
            try {
                const feedback = req.body

                if (!feedback._id) {
                    throw new Error("Feedback não encontrado para esse id")
                }

                body.forEach((elemento) => feedback[elemento[0]] = elemento[1])

                delete feedback._id

                ValidacoesFeedbacks.validaFeedback(feedback.nome, feedback.telefone, feedback.email, feedback.cnpj, cliente.endereco)
                const resposta = await FeedbacksRepository.atualizaFeedbackPorId(id, feedback)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(400).json({ message: erro.message, id })
            }

        })
    }
}

export default FeedbacksController