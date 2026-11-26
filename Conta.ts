import Cliente from "./Cliente"
import ValorInvalidoException from "./ValorInvalidoException"
import ContaBloqueadaException from "./ContaBloqueadaException"
import SaldoInsuficienteException from "./SaldoInsuficienteException"
import LimiteDiarioExcedidoException from "./LimiteDiarioExcedidoException"

export default class Conta {
    private numero: string
    private agencia: string
    private dataAbertura: string
    private saldo: number
    private bloqueada: boolean
    private saquesHoje: number
    private limiteDiario: number
    private cliente: Cliente | undefined

    constructor(numero: string, agencia: string, dataAbertura: string, saldo: number, limiteDiario: number){
        this.numero = numero
        this.agencia = agencia
        this.dataAbertura = dataAbertura
        this.saldo = saldo
        this.limiteDiario = limiteDiario
        this.bloqueada = false
        this.saquesHoje = 0
    }

    getNumero(): string{
        return this.numero
    }

    getAgencia(): string{
        return this.agencia
    }

    getSaldo(): number{
        return this.saldo
    }

    setBloqueada(x: boolean): void{
        this.bloqueada = x
    }

    getCliente(): Cliente | undefined{
        return this.cliente
    }

    setCliente(cliente: Cliente): void{
        this.cliente = cliente
    }

    depositar(valor: number): void{
        if(valor <= 0){
            throw new ValorInvalidoException()
        }
        this.saldo += valor
    }

    sacar(valor: number): void{
        if(valor <= 0){
            throw new ValorInvalidoException()
        }
        if(this.bloqueada){
            throw new ContaBloqueadaException()
        }
        if(valor > this.saldo){
            throw new SaldoInsuficienteException(valor - this.saldo)
        }
        if(this.saquesHoje >= this.limiteDiario){
            throw new LimiteDiarioExcedidoException()
        }
        this.saldo -= valor
        this.saquesHoje++
    }

    consultarSaldo(): number{
        return this.saldo
    }
}
