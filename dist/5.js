"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BombaCombustivel {
    constructor() {
        this.aditivada = 5.63;
        this.comum = 5.21;
        this.quantidadeCombustivel = 100;
    }
    abastecerPorValor(valorPago, tipoCombustivel) {
        if (tipoCombustivel == "aditivada") {
            let abastecido = valorPago / this.aditivada;
            console.log(`Você abasteceu ${abastecido.toFixed(2)} litros e pagou R$${valorPago}, com gasolina aditivada.`);
            this.quantidadeCombustivel -= abastecido;
            return abastecido;
        }
        else if (tipoCombustivel == "comum") {
            let abastecido = valorPago / this.comum;
            console.log(`Você abasteceu ${abastecido.toFixed(2)} litros e pagou R$${valorPago}, com gasolina comum.`);
            this.quantidadeCombustivel -= abastecido;
            return abastecido;
        }
        else {
            console.log("Desculpe, não temos esse combustivel. Apenas gasolina comum ou aditivada.");
        }
    }
    abastecerPorLitro(quantidadeCombustivel, tipoCombustivel) {
        if (tipoCombustivel == "aditivada") {
            let abastecido = quantidadeCombustivel * this.aditivada;
            let tanque = abastecido / this.aditivada;
            console.log(`Você abasteceu ${quantidadeCombustivel} litros da gasolina aditivada. Valor a pagar: ${abastecido}`);
            this.quantidadeCombustivel -= tanque;
            return abastecido;
        }
        else if (tipoCombustivel == "comum") {
            let abastecido = quantidadeCombustivel * this.comum;
            let tanque = abastecido / this.comum;
            console.log(`Você abasteceu ${quantidadeCombustivel} litros da gasolina comum. Valor a pagar: ${abastecido}`);
            this.quantidadeCombustivel -= tanque;
            return abastecido;
        }
        else {
            console.log("Desculpe, não temos esse combustivel. Apenas gasolina comum ou aditivada.");
        }
    }
    alterarValor(novoValor, tipoCombustivel) {
        if (tipoCombustivel == "aditivada") {
            this.aditivada = novoValor;
            console.log("Você alterou o valor da gasolina aditivada.");
        }
        else if (tipoCombustivel == "comum") {
            this.comum = novoValor;
        }
        else {
            console.log("Desculpe, não temos esse combustivel. Apenas gasolina comum ou aditivada.");
        }
    }
}
exports.default = BombaCombustivel;
