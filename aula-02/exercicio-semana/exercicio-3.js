//Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let valor_jantar_inicial = 167
let taxa_garçom = valor_jantar_inicial*0.1
let valor_jantar_final = valor_jantar_inicial + taxa_garçom

console.log(`O valor total do jantar, considerando os 10% do garçom, será de R$${valor_jantar_final}`)