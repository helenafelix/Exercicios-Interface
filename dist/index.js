"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = __importDefault(require("./Cliente"));
const Conta_1 = __importDefault(require("./Conta"));
const SMS_1 = __importDefault(require("./SMS"));
const Email_1 = __importDefault(require("./Email"));
const Aplicativo_1 = __importDefault(require("./Aplicativo"));
let cliente1 = new Cliente_1.default("Ana Souza", "111.111.111-11", "Rua A, 10", 2500);
let cliente2 = new Cliente_1.default("Bruno Lima", "222.222.222-22", "Rua B, 20", 3200);
let conta1 = new Conta_1.default("1001", "0001", "01/10/2026", 1000, 2);
let conta2 = new Conta_1.default("1002", "0001", "02/10/2026", 500, 2);
let conta3 = new Conta_1.default("1003", "0001", "03/10/2026", 300, 2);
let conta4 = new Conta_1.default("1004", "0001", "04/10/2026", 200, 2);
cliente1.adicionarConta(conta1);
cliente1.adicionarConta(conta2);
cliente2.adicionarConta(conta3);
cliente2.adicionarConta(conta4);
conta1.setCliente(cliente1);
conta2.setCliente(cliente1);
conta3.setCliente(cliente2);
conta4.setCliente(cliente2);
function tentarSacar(conta, valor, notificacao) {
    try {
        conta.sacar(valor);
        console.log("Saque de R$" + valor.toFixed(2) + " realizado. Saldo: R$" + conta.consultarSaldo().toFixed(2));
    }
    catch (erro) {
        if (erro instanceof Error) {
            notificacao.enviar(erro.message);
        }
    }
}
console.log("--- ASSOCIAÇÃO ENTRE CLIENTE E CONTA ---");
console.log(cliente1.getNome() + " possui " + cliente1.getContas().length + " contas.");
console.log(cliente2.getNome() + " possui " + cliente2.getContas().length + " contas.");
console.log("\n--- INTERFACE DE NOTIFICAÇÃO ---");
let canais = [new SMS_1.default(), new Email_1.default(), new Aplicativo_1.default()];
for (let canal of canais) {
    canal.enviar("Bem-vindo ao banco digital!");
}
console.log("\n--- VALOR INVÁLIDO: 2 EXEMPLOS ---");
tentarSacar(conta1, -50, new SMS_1.default());
tentarSacar(conta2, 0, new Email_1.default());
console.log("\n--- CONTA BLOQUEADA: 2 EXEMPLOS ---");
conta1.setBloqueada(true);
conta2.setBloqueada(true);
tentarSacar(conta1, 100, new Aplicativo_1.default());
tentarSacar(conta2, 100, new SMS_1.default());
conta1.setBloqueada(false);
conta2.setBloqueada(false);
console.log("\n--- SALDO INSUFICIENTE: 2 EXEMPLOS ---");
tentarSacar(conta3, 500, new Email_1.default());
tentarSacar(conta4, 250, new Aplicativo_1.default());
console.log("\n--- LIMITE DIÁRIO: 2 EXEMPLOS ---");
tentarSacar(conta1, 100, new SMS_1.default());
tentarSacar(conta1, 100, new SMS_1.default());
tentarSacar(conta1, 100, new Email_1.default());
tentarSacar(conta1, 100, new Aplicativo_1.default());
console.log("\n--- SAQUE REALIZADO: 2 EXEMPLOS ---");
tentarSacar(conta3, 50, new SMS_1.default());
tentarSacar(conta4, 50, new Email_1.default());
console.log("\nSaldo final da conta 3: R$" + conta3.consultarSaldo().toFixed(2));
console.log("Saldo final da conta 4: R$" + conta4.consultarSaldo().toFixed(2));
//# sourceMappingURL=index.js.map