"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculadora {
    constructor() {
        this.historico = [];
    }
    somar(a, b) {
        let resultado = a + b;
        this.historico.push({ operacao: `${a} + ${b}`, resultado });
        return resultado;
    }
    diminuir(a, b) {
        let resultado = a - b;
        this.historico.push({ operacao: `${a} - ${b}`, resultado });
        return resultado;
    }
    multiplicar(a, b) {
        let resultado = a * b;
        this.historico.push({ operacao: `${a} * ${b}`, resultado });
        return resultado;
    }
    dividir(a, b) {
        if (b === 0) {
            console.log("Não é possível dividir por 0.");
        }
        else {
            let resultado = a / b;
            this.historico.push({ operacao: `${a} / ${b}`, resultado });
            return resultado;
        }
    }
    visualizarHistorico() {
        console.log(`O historico tem um total de: ${this.historico.length} transações.`);
        for (const { operacao, resultado } of this.historico) {
            console.log(`${operacao} = ${resultado}`);
        }
    }
}
exports.default = Calculadora;
