import express from 'express';
import Usuarios from './src/controllers/UsuariosController.js';

/**
 * instância do Express
 * inicialização do que foi importado
 */
const app = express()
/**
 * varável de alocação de porta
 */
const port = process.env.PORT | 3000

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})

//*midware* usar sempre depois da const app e antes das rotas
// Usar depois do POST
app.use(express.json())

Usuarios.rotas(app)