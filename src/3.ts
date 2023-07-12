// 3. Crie uma classe para implementar uma conta corrente. A classe
// deve possuir os seguintes atributos:
// a. Número da conta
// b. Nome do correntista
// c. Saldo
// Os métodos são os seguintes:
// a) Alterar nome
// b) Deposito
// c) Saque
// No construtor, o saldo é opcional, com valor padrão zero e os
// demais atributos são obrigatórios. A conta não pode ficar com saldo
// negativo.

class Conta {
    numeroDaConta:number
    saldo:number

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

console.log("ATIVIDADE 3")
console.log("----------------------")



const conta = new Conta("misael")

console.log(conta)

conta.alterarNome("Misael Soares")
console.log(`Você alterou o nome da sua conta. Seu conta atual é:`);
console.log(conta);


conta.deposito(10)
console.log(`💰 Você fez um deposito. Saldo atual: ${conta.saldoEmConta()}`);

conta.saque(6)
console.log(`Você fez um saque. Saldo atual: ${conta.saldoEmConta()}`);

conta.saque(5)

conta.deposito(50)
console.log(`💰 Você fez um deposito. Saldo atual: ${conta.saldoEmConta()}`);

console.log("----------------------")
