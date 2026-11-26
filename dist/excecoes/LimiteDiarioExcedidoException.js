"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LimiteDiarioExcedidoException extends Error {
    constructor() {
        super("Limite diário excedido");
        this.name = "LimiteDiarioExcedidoException";
    }
}
exports.default = LimiteDiarioExcedidoException;
//# sourceMappingURL=LimiteDiarioExcedidoException.js.map