// 1. Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.
console.log("ATIVIDADE 1")
console.log("----------------------")

import Contador from "./1";
const contador = new Contador()


console.log(`Valor inicial: ${contador.retornarValor()}`);

contador.incrementar()
contador.incrementar()
contador.incrementar()

console.log(`Valor incrementado: ${contador.retornarValor()}`);

contador.zerar()
console.log(`Valor após zerar: ${contador.retornarValor()}`);

console.log("----------------------")




// 2. Crie uma classe que modele uma bola:
// a. Atributos
// i. Cor
// ii. Circunferência
// iii. Material
// b. Métodos
// i. Trocar Cor
// ii. Mostrar cor

console.log("ATIVIDADE 2")
console.log("----------------------")
import Bola from "./2";
const bola = new Bola("verde", 6, "plastico")

console.log(bola);

bola.trocarCor("rosa")
console.log(bola.mostrarCor());

console.log(bola);

console.log("----------------------")




// 3. Crie uma classe para implementar uma conta corrente. A classe
// deve possuir os seguintes atributos:
// a. Número da conta
// b. Nome do correntista
// c. Saldo
// Os métodos são os seguintes:
// a) Alterar nome
// b) Deposito
// c) Saque
// No construtor, o saldo é opcional, com valor padrão zero e os
// demais atributos são obrigatórios. A conta não pode ficar com saldo
// negativo.
console.log("ATIVIDADE 3")
console.log("----------------------")

import Conta from "./3";

const conta = new Conta("misael")

console.log(conta)

conta.alterarNome("Misael Soares")
console.log(`Você alterou o nome da sua conta. Seu conta atual é:`);
console.log(conta);


conta.deposito(10)
console.log(`💰 Você fez um deposito. Saldo atual: ${conta.saldoEmConta()}`);

conta.saque(6)
console.log(`Você fez um saque. Saldo atual: ${conta.saldoEmConta()}`);

conta.saque(5)

conta.deposito(50)
console.log(`💰 Você fez um deposito. Saldo atual: ${conta.saldoEmConta()}`);

console.log("----------------------")




// 4. Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.
console.log("ATIVIDADE 4")
console.log("----------------------")
import Calculadora from "./4";
const calculadora = new Calculadora()


calculadora.visualizarHistorico()

calculadora.somar(5, 5)
calculadora.dividir(5, 1)
calculadora.diminuir(5, 1)
calculadora.multiplicar(5234, 13453245)

console.log("As transações ja feitas foram:")
calculadora.visualizarHistorico()

console.log("----------------------")

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

console.log("ATIVIDADE 5")
console.log("----------------------")
import BombaCombustivel from "./5";

const bombaCombustivel = new BombaCombustivel()

console.log(bombaCombustivel);


bombaCombustivel.abastecerPorValor(10,"comum")
bombaCombustivel.abastecerPorLitro(10,"aditivada")
bombaCombustivel.abastecerPorLitro(10,"aditivada")
bombaCombustivel.alterarValor(3.21,"aditivada")

console.log(bombaCombustivel);