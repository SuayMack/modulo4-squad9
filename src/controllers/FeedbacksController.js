import FeedbacksRepository from "../Repository/FeedbacksRepository.js"
import ValidacoesFeedbacks from "../services/ValidacoesFeedbacks.js"


class FeedbacksController {

    static rotas(app) {

        app.post("/feedback", async (req, res) => {
            try {
                ValidacoesFeedbacks.validaFeedbacks(req.body.cliente, req.body.produto, req.body.descricao)

                const feedback = req.body

                const inserir = await FeedbacksRepository.criarFeedback(feedback)

                res.status(201).json(inserir)

            } catch (erro) {

                res.status(400).json({ message: erro.message })

            }
        })
        
        app.get("/feedbacks", async (req, res) => {
            try {
                const feedbacks = await FeedbacksRepository.buscarTodosOsFeedbacks()
                res.status(200).json(feedbacks)
            } catch (erro) {
                res.status(404).json(erro.message)
            }
        })

        app.get("/feedback/:id", async (req, res) => {
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

        app.delete("/feedback/:id", async (req, res) => {
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

        app.patch("/feedback/:id", async (req, res) => {
            const id = req.params.id
            const body = Object.entries(req.body)
            try {
                const feedback = req.body

                if (!feedback._id) {
                    throw new Error("Feedback não encontrado para esse id")
                }

                body.forEach((elemento) => feedback[elemento[0]] = elemento[1])

                delete feedback._id

                ValidacoesFeedbacks.validaFeedbacks(feedback.cliente, feedback.produto, feedback.descricao)
                const resposta = await FeedbacksRepository.atualizaFeedbackPorId(id, feedback)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(400).json({ message: erro.message, id })
            }

        })
    }
}

export default FeedbacksController