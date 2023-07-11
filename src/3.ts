class Conta {
    saldo:number
    numeroDaConta:number

    constructor(public nome:string){
        this.saldo = 0
        this.numeroDaConta = Math.floor(Math.random() * (100000 - 1000) + 1000)
    }

    public alterarNome(nome:string){
        this.nome = nome
    }
    public deposito(deposito:number){
        this.saldo += deposito
    }
    public saque(saque:number){
        saque < this.saldo ? this.saldo -= saque : console.log("❌ Saldo insuficiente para este saque. ❌");
    }
    public saldoEmConta(){
        return this.saldo
    }
}

export default Conta