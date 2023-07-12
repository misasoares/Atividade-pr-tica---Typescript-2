// 6. Implemente uma classe chamada Carro com as seguintes
// propriedades:
// a. Um veículo tem um certo consumo de combustível (medidos
// em km / litro) e uma certa quantidade de combustível no
// tanque.
// b. O consumo é especificado no construtor e o nível de
// combustível inicial é 0.
// c. Forneça um método andar() que simula o ato de dirigir o
// veículo por uma certa distância, reduzindo o nível de
// combustível no tanque de gasolina.

// d. Forneça um método obterGasolina(), que retorna o nível atual
// de combustível e forneça um método adicionarGasolina(),
// para abastecer o tanque.

class Carro{
    consumoPorLitro:number
    litrosNoTanque:number

    constructor(consumoPorLitro:number){
        this.litrosNoTanque = 0
        this.consumoPorLitro = consumoPorLitro
    }

    public andar(distancia:number){ //distancia em metros que o carro vai andar
        let combustivelGasto = distancia / this.consumoPorLitro

        if(combustivelGasto > this.litrosNoTanque && this.litrosNoTanque !== 0){
            let kmQueAndei = this.litrosNoTanque * this.consumoPorLitro
            let combustivelGastoNessaViagem = kmQueAndei / this.consumoPorLitro

            this.litrosNoTanque -= combustivelGastoNessaViagem
            console.log(`Conseguimos andar apenas ${kmQueAndei} km. Abasteça para prosseguir viagem.`);
        }
        else if(combustivelGasto < this.litrosNoTanque){
            this.litrosNoTanque -= combustivelGasto
            console.log(`Nessa viagem você andou ${distancia} km e gastou ${combustivelGasto} litros de gasolina. Restam ${this.litrosNoTanque} litros no tanque.`);
        }
        else{
            console.log(`Não foi possível ligar o carro. Estamos sem combustivel.`)
        }
    }

    public adicionarGasolina(quantia:number){//litros
        this.litrosNoTanque += quantia
        console.log(`Você adicionou ${quantia} litros de gasolina no tanque..`);
    }

    public obterGasolina(){
        console.log(`Você tem um total de ${this.litrosNoTanque} litros de gasolina no tanque.`)
    }


}

const carro = new Carro(10)

console.log(carro);

carro.andar(50)
carro.adicionarGasolina(20)
carro.andar(50)
carro.obterGasolina()

console.log(carro);
