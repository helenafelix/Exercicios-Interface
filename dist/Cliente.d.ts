import Conta from "./Conta";
export default class Cliente {
    private nome;
    private cpf;
    private endereco;
    private renda;
    private contas;
    constructor(nome: string, cpf: string, endereco: string, renda: number);
    getNome(): string;
    setNome(x: string): void;
    getCpf(): string;
    getEndereco(): string;
    getRenda(): number;
    getContas(): Conta[];
    adicionarConta(conta: Conta): void;
}
//# sourceMappingURL=Cliente.d.ts.map