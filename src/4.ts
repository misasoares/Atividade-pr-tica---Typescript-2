// 4. Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.

class Calculadora {

    public historico: {operacao:string, resultado:number}[]

    constructor(){
        this.historico = []
    }

    public somar(a:number, b:number){
        let resultado = a + b
        this.historico.push({operacao:`${a} + ${b}`, resultado})        
        return resultado
    }
    public diminuir(a:number, b:number){
        let resultado = a - b
        this.historico.push({operacao: `${a} - ${b}`, resultado})       
        return resultado
    }
    public multiplicar(a:number, b:number){
        let resultado = a * b
        this.historico.push({operacao: `${a} * ${b}`, resultado})
        return resultado
    }
    public dividir(a:number, b:number){
        if(b === 0){
            console.log("Não é possível dividir por 0.")
        }else{
            let resultado = a / b
            this.historico.push({operacao: `${a} / ${b}`, resultado})
            return resultado
        }
        
    }
    public visualizarHistorico() {
        console.log(`O historico tem um total de: ${this.historico.length} transações.`)
        for (const { operacao, resultado } of this.historico) {
          console.log(`${operacao} = ${resultado}`);
        }
    
}
}

console.log("ATIVIDADE 4")
console.log("----------------------")

const calculadora = new Calculadora()


calculadora.visualizarHistorico()

calculadora.somar(5, 5)
calculadora.dividir(5, 1)
calculadora.diminuir(5, 1)
calculadora.multiplicar(5234, 13453245)

console.log("As transações ja feitas foram:")
calculadora.visualizarHistorico()

console.log("----------------------")