export default class LimiteDiarioExcedidoException extends Error {
    constructor(){
        super("Limite diário excedido")
        this.name = "LimiteDiarioExcedidoException"
    }
}
