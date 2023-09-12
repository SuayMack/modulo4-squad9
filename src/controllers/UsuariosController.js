import UsuariosModel from "../models/UsuariosModel.js";

class UsuariosController {

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
    * Rota para buscar todos os usuários
    */
    app.get("/", (req, res)=>{      
      res.status(200).json("olá mundo")
    })
  }
}

export default UsuariosController