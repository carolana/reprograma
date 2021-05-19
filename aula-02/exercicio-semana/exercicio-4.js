//Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.


let km_percorridos = 400
let dias_percorridos = 28
let preço_pagar = (km_percorridos*0.15) + (dias_percorridos*60)

console.log(`O preço total a pagar será de R$${preço_pagar},00`)