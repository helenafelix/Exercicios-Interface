import Conta from "./Conta"

export default class Cliente {
    private nome: string
    private cpf: string
    private endereco: string
    private renda: number
    private contas: Conta[]

    constructor(nome: string, cpf: string, endereco: string, renda: number){
        this.nome = nome
        this.cpf = cpf
        this.endereco = endereco
        this.renda = renda
        this.contas = []
    }

    getNome(): string{
        return this.nome
    }

    setNome(x: string): void{
        this.nome = x
    }

    getCpf(): string{
        return this.cpf
    }

    getEndereco(): string{
        return this.endereco
    }

    getRenda(): number{
        return this.renda
    }

    getContas(): Conta[]{
        return this.contas
    }

    adicionarConta(conta: Conta): void{
        this.contas.push(conta)
    }
}
