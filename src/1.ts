// 1. Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.

class Contador {
    private valor: number

    constructor(){
        this.valor = 0
    }

    public zerar(){
        this.valor = 0
    }

    public incrementar(){
        this.valor++
    }
    public retornarValor(){
        return this.valor
    }
}

console.log("ATIVIDADE 1")
console.log("----------------------")


const contador = new Contador()


console.log(`Valor inicial: ${contador.retornarValor()}`);

contador.incrementar()
contador.incrementar()
contador.incrementar()

console.log(`Valor incrementado: ${contador.retornarValor()}`);

contador.zerar()
console.log(`Valor após zerar: ${contador.retornarValor()}`);

console.log("----------------------")