"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValorInvalidoException_1 = __importDefault(require("./excecoes/ValorInvalidoException"));
const ContaBloqueadaException_1 = __importDefault(require("./excecoes/ContaBloqueadaException"));
const SaldoInsuficienteException_1 = __importDefault(require("./excecoes/SaldoInsuficienteException"));
const LimiteDiarioExcedidoException_1 = __importDefault(require("./excecoes/LimiteDiarioExcedidoException"));
class Conta {
    numero;
    agencia;
    dataAbertura;
    saldo;
    bloqueada;
    saquesHoje;
    limiteDiario;
    cliente;
    constructor(numero, agencia, dataAbertura, saldo, limiteDiario) {
        this.numero = numero;
        this.agencia = agencia;
        this.dataAbertura = dataAbertura;
        this.saldo = saldo;
        this.limiteDiario = limiteDiario;
        this.bloqueada = false;
        this.saquesHoje = 0;
    }
    getNumero() {
        return this.numero;
    }
    getAgencia() {
        return this.agencia;
    }
    getSaldo() {
        return this.saldo;
    }
    setBloqueada(x) {
        this.bloqueada = x;
    }
    getCliente() {
        return this.cliente;
    }
    setCliente(cliente) {
        this.cliente = cliente;
    }
    depositar(valor) {
        if (valor <= 0) {
            throw new ValorInvalidoException_1.default();
        }
        this.saldo += valor;
    }
    sacar(valor) {
        if (valor <= 0) {
            throw new ValorInvalidoException_1.default();
        }
        if (this.bloqueada) {
            throw new ContaBloqueadaException_1.default();
        }
        if (valor > this.saldo) {
            throw new SaldoInsuficienteException_1.default(valor - this.saldo);
        }
        if (this.saquesHoje >= this.limiteDiario) {
            throw new LimiteDiarioExcedidoException_1.default();
        }
        this.saldo -= valor;
        this.saquesHoje++;
    }
    consultarSaldo() {
        return this.saldo;
    }
}
exports.default = Conta;
//# sourceMappingURL=Conta.js.map