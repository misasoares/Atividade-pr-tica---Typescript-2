"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    constructor(nome) {
        this.nome = nome;
        this.saldo = 0;
        this.numeroDaConta = Math.floor(Math.random() * (100000 - 1000) + 1000);
    }
    alterarNome(nome) {
        this.nome = nome;
    }
    deposito(deposito) {
        this.saldo += deposito;
    }
    saque(saque) {
        saque < this.saldo ? this.saldo -= saque : console.log("❌ Saldo insuficiente para este saque. ❌");
    }
    saldoEmConta() {
        return this.saldo;
    }
}
exports.default = Conta;
