import ContratosRepository from "../Repository/ContratoRepository.js";

class ValidacoesContratos {

    static validaDescricao(descricao) {

        if (descricao.length >= 20 && descricao.length <= 350) {
            return true
        }
        else {
            throw new Error("A descrição deve conter no mínimo 20 e no máximo 350 caracteres")
        }
    }

    static validaCamposData(dt_inicio, dt_fim) {
        let dataIni = Date.parse(dt_inicio);
        let dataFim = Date.parse(dt_fim);

        if (dataIni < Date.now)
            throw new Error("Data de inicio do contrato, não pode ser menor que a data atual")
        if (dataFim < Date.now)
            throw new Error("Data final de contrato, não pode ser menor que a data atual")
        if (dataFim < dataIni)
            throw new Error("Data final de contrato, não pode ser menor que a data de incio")

        return true;
    }

    static async validaContrato(descricao, dt_inicio, dt_fim) {
        try {
            ValidacoesContratos.validaDescricao(descricao)
            ValidacoesContratos.validaCamposData(dt_inicio, dt_fim)
            
        } catch (error) {
            throw error
        }
    }
}

export default ValidacoesContratos