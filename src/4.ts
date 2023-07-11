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

export default Calculadora