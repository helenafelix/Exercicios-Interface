"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SaldoInsuficienteException extends Error {
    falta;
    constructor(falta) {
        super("Saldo insuficiente. Falta R$" + falta.toFixed(2));
        this.falta = falta;
        this.name = "SaldoInsuficienteException";
    }
}
exports.default = SaldoInsuficienteException;
//# sourceMappingURL=SaldoInsuficienteException.js.map