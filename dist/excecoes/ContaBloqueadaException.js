"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContaBloqueadaException extends Error {
    constructor() {
        super("Conta bloqueada");
        this.name = "ContaBloqueadaException";
    }
}
exports.default = ContaBloqueadaException;
//# sourceMappingURL=ContaBloqueadaException.js.map