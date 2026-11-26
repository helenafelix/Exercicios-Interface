export default class ContaBloqueadaException extends Error {
    constructor(){
        super("Conta bloqueada")
        this.name = "ContaBloqueadaException"
    }
}
