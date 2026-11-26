"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    nome;
    cpf;
    endereco;
    renda;
    contas;
    constructor(nome, cpf, endereco, renda) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.renda = renda;
        this.contas = [];
    }
    getNome() {
        return this.nome;
    }
    setNome(x) {
        this.nome = x;
    }
    getCpf() {
        return this.cpf;
    }
    getEndereco() {
        return this.endereco;
    }
    getRenda() {
        return this.renda;
    }
    getContas() {
        return this.contas;
    }
    adicionarConta(conta) {
        this.contas.push(conta);
    }
}
exports.default = Cliente;
//# sourceMappingURL=Cliente.js.map