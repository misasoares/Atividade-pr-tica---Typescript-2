// 5. Faça um programa completo utilizando classes e métodos que:
// a. Possua uma classe chamada BombaCombustivel, com no
// mínimo esses atributos:
// i. tipoCombustivel.
// ii. valorLitro

// iii. quantidadeCombustivel
// b. Possua no mínimo esses métodos:
// i. abastecerPorValor() – método onde é informado o
// valor a ser abastecido e mostra a quantidade de litros
// que foi colocada no veículo
// ii. abastecerPorLitro() – método onde é informado a
// quantidade em litros de combustível e mostra o valor a
// ser pago pelo cliente.
// iii. alterarValor() – altera o valor do litro do combustível.
// iv. alterarCombustivel() – altera o tipo do combustível.
// v. alterarQuantidadeCombustivel() – altera a
// quantidade de combustível restante na bomba.

// OBS: Sempre que acontecer um abastecimento é necessário
// atualizar a quantidade de combustível total na bomba. Não deve ser
// possível abastecer se não tiver gasolina suficiente na bomba.


class BombaCombustivel {
    
    valorAditivada:number
    valorComum:number
    bombaAditivada:number
    bombaComum:number

    constructor(){
        this.valorAditivada = 5.63
        this.valorComum = 5.21
        this.bombaAditivada = 100
        this.bombaComum = 100
    }
    public abastecerPorValor(valorPago:number, tipoCombustivel:string){
        if(tipoCombustivel == "aditivada"){
            let abastecido = valorPago / this.valorAditivada
            if(abastecido > this.bombaAditivada){
                console.log(`Não temos litros o suficiente na bomba ${tipoCombustivel}. Abasteça menos litros.`);
            }else{
            console.log(`Você abasteceu ${abastecido.toFixed(2)} litros e pagou R$${valorPago}, com gasolina aditivada.`)
            this.bombaAditivada -= abastecido
            return abastecido
            }
        }else if(tipoCombustivel == "comum"){
            let abastecido = valorPago / this.valorComum
            if(abastecido > this.bombaComum){
                console.log(`Não temos litros o suficiente na bomba ${tipoCombustivel}. Abasteça menos litros.`);
            }else{
                console.log(`Você abasteceu ${abastecido.toFixed(2)} litros e pagou R$${valorPago}, com gasolina comum.`)
                this.bombaComum -= abastecido
                return abastecido
            }
        }else{
            console.log("Desculpe, não temos esse combustivel. Apenas gasolina comum ou aditivada.")
        }
    }

    public abastecerPorLitro(quantidadeCombustivel:number, tipoCombustivel:string){
        if(tipoCombustivel == "aditivada"){
            if(quantidadeCombustivel > this.bombaAditivada){
                console.log(`Não temos litros o suficiente na bomba ${tipoCombustivel}. Abasteça menos litros.`);
            }else{
                let abastecido = quantidadeCombustivel * this.valorAditivada
                let tanque = abastecido / this.valorAditivada
                console.log(`Você abasteceu ${quantidadeCombustivel} litros da gasolina aditivada. Valor a pagar: ${abastecido}`)
                this.bombaAditivada -= tanque
                return abastecido
            }  
        }else if(tipoCombustivel == "comum"){
            if(quantidadeCombustivel > this.bombaComum){
                console.log(`Não temos litros o suficiente na bomba ${tipoCombustivel}. Abasteça menos litros.`);
            }else{
            let abastecido = quantidadeCombustivel * this.valorComum
            let tanque = abastecido / this.valorComum
            console.log(`Você abasteceu ${quantidadeCombustivel} litros da gasolina comum. Valor a pagar: ${abastecido}`)
            this.bombaComum -= tanque
            return abastecido
            }
            
        }else{
            console.log("Desculpe, não temos esse combustivel. Apenas gasolina comum ou aditivada.")
        }
    }  
    
    public alterarValor(novoValor:number, tipoCombustivel:string){
        if(tipoCombustivel == "aditivada"){
            this.valorAditivada = novoValor
            console.log(`Você alterou o valor da gasolina aditivada. Valor atual: R$${novoValor}`);
            
        }else if(tipoCombustivel == "comum"){
            this.valorComum = novoValor
            console.log(`Você alterou o valor da gasolina comum. Valor atual: R$${novoValor}`);
        }else{
            console.log("Desculpe, não temos esse combustivel. Apenas gasolina comum ou aditivada.");
            
        }
    }

    public adicionarCombustivel(quantidadeCombustivel:number,tipoCombustivel:string){
        if(tipoCombustivel === "aditivada"){
            this.bombaAditivada += quantidadeCombustivel
            console.log(`Você adicionou ${quantidadeCombustivel} litros na bomba aditivada.`);
        }else if(tipoCombustivel === "comum"){
            this.bombaComum += quantidadeCombustivel
            console.log(`Você adicionou ${quantidadeCombustivel} litros na bomba comum.`);
        }else{
            console.log("Desculpe, não temos esse combustivel. Apenas gasolina comum ou aditivada.");
        }
    }


}







const bombaCombustivel = new BombaCombustivel()
console.log(`-------------------------------------------------------------------------------------`);
console.log(`| Olá! Seja bem vindo ao nosso posto de combustivel. Ficaremos felizes em atendê-lo.|`)
console.log(`-------------------------------------------------------------------------------------`);

console.log(bombaCombustivel); //bomba inicial

bombaCombustivel.abastecerPorValor(10,"comum") //abastece R$10,00 com gasolina comum
bombaCombustivel.abastecerPorLitro(10,"aditivada")//abastece 10 Litros de gasolina aditivada
bombaCombustivel.abastecerPorLitro(12,"aditivada")//abastece 12 litros de gasolina aditivada
bombaCombustivel.alterarValor(3.21,"aditivada")//altera o valor da gasolina aditivada
bombaCombustivel.alterarValor(3.21,"comum")//altera o valor da gasolina comum

console.log(bombaCombustivel);//bomba após ações

bombaCombustivel.abastecerPorLitro(10,"comum")//abastece 10 Litros de comum com novo valor
bombaCombustivel.abastecerPorLitro(10,"aditivada")//abastece 10 litros aditivada com novo valor

console.log(bombaCombustivel);//bomba após alterações

bombaCombustivel.abastecerPorLitro(60,"aditivada")//abastece 60 Litros aditivada
bombaCombustivel.abastecerPorLitro(80,"comum")//abastece 80 litros comum
bombaCombustivel.abastecerPorLitro(80,"comum")//tenta abastecer mas a bomba não tem litros o suficiente
bombaCombustivel.abastecerPorValor(300,"comum")//tenta abastecer mas a bomba não tem litros o suficiente

console.log(bombaCombustivel);

bombaCombustivel.adicionarCombustivel(145,"aditivada")//adiciona combustivel na bomba aditivada
bombaCombustivel.adicionarCombustivel(230,"comum")//adiciona combustivel na bomba comum

console.log(bombaCombustivel);



