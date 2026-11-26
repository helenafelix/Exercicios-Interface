export default class ValorInvalidoException extends Error {
    constructor(){
        super("Valor inválido")
        this.name = "ValorInvalidoException"
    }
}
