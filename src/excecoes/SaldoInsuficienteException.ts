export default class SaldoInsuficienteException extends Error {
    constructor(public falta: number){
        super("Saldo insuficiente. Falta R$"+falta.toFixed(2))
        this.name = "SaldoInsuficienteException"
    }
}
