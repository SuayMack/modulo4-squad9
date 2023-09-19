import ProdutosRepository from "../Repository/ProdutosRepository.js"
import ValidacoesProdutos from "../services/ValidacoesProdutos.js"

class ProdutosController {

    static rotas(app) {

        app.get("/produtos", async (req, res) => {
            try {
                const produtos = await ProdutosRepository.buscarTodosOsProdutos()
                res.status(200).json(produtos)
            } catch (erro) {
                res.status(404).json(erro.message)
            }
        })

        app.get("/produtos/:id", async (req, res) => {
            try {
                const produto = await ProdutosRepository.buscarProdutoPorId(req.params.id)

                if (!produto._id) {
                    throw new Error("Produto não encontrado para esse id")
                }
                res.status(200).json(produto)
            } catch (erro) {
                res.status(404).json({ message: erro.message, id: req.params.id })
            }
        })

        app.post("/produtos", async (req, res) => {
            try {
                await ValidacoesProdutos.validaProduto(req.body.nome, req.body.descricao)

                const produto = req.body

                const inserir = await ProdutosRepository.criarProduto(produto)

                res.status(201).json(inserir)

            } catch (erro) {

               
                res.status(400).json({ message: erro.message })
            
            }
        })

        app.delete("/produtos/:id", async (req, res) => {
            const id = req.params.id
            try {

                const produto = await ProdutosRepository.buscarProdutoPorId(id)

                if (!produto._id) {
                    throw new Erro("Produto não encontrado")
                }

                const resposta = await ProdutosRepository.deletaProdutoPorId(id)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(404).json({ Erro: erro.message, id })
            }
        })

        app.patch("/produtos/:id", async (req, res) => {
            const id = req.params.id
            const body = Object.entries(req.body)
            try {
                const produto = req.body

                if (!produto._id) {
                    throw new Error("Produto não encontrado para esse id")
                }

                body.forEach((elemento) => produto[elemento[0]] = elemento[1])

                delete produto._id

                ValidacoesProdutos.validaProduto(produto.nome, produto.descricao)
                const resposta = await ProdutosRepository.atualizaProdutoPorId(id, produto)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(400).json({ message: erro.message, id })
            }

        })
    }
}

export default ProdutosController