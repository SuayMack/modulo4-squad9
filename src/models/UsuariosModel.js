/**
 * Objeto modelo para usuários
 */
class UsuariosModel{
  /**
   * Construtor do objeto modelo para usuários
   * @param {string} nome 
   * @param {string} email 
   * @param {string} cpf 
   * @param {string} telefone 
   * @param {string} endereco 
   * 
   */
  constructor(nome, email, cpf, telefone, endereco){
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.telefone = telefone
    this.endereco = endereco
  }
}

export default UsuariosModel