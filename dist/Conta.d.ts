import Cliente from "./Cliente";
export default class Conta {
    private numero;
    private agencia;
    private dataAbertura;
    private saldo;
    private bloqueada;
    private saquesHoje;
    private limiteDiario;
    private cliente;
    constructor(numero: string, agencia: string, dataAbertura: string, saldo: number, limiteDiario: number);
    getNumero(): string;
    getAgencia(): string;
    getSaldo(): number;
    setBloqueada(x: boolean): void;
    getCliente(): Cliente | undefined;
    setCliente(cliente: Cliente): void;
    depositar(valor: number): void;
    sacar(valor: number): void;
    consultarSaldo(): number;
}
//# sourceMappingURL=Conta.d.ts.map