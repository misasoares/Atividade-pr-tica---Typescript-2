// 2. Crie uma classe que modele uma bola:
// a. Atributos
// i. Cor
// ii. Circunferência
// iii. Material
// b. Métodos
// i. Trocar Cor
// ii. Mostrar cor

class Bola {
    
    constructor(public cor:string, public circunferencia:number, public mateiral:string) {  
    }

    public trocarCor(cor:string){
        this.cor = cor
    }
    public mostrarCor(){
       return this.cor
    }
}

console.log("ATIVIDADE 2")
console.log("----------------------")

const bola = new Bola("verde", 6, "plastico")

console.log(bola);

bola.trocarCor("rosa")
console.log(bola.mostrarCor());

console.log(bola);

console.log("----------------------")