"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bola {
    constructor(cor, circunferencia, mateiral) {
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.mateiral = mateiral;
    }
    trocarCor(cor) {
        this.cor = cor;
    }
    mostrarCor() {
        return this.cor;
    }
}
exports.default = Bola;
