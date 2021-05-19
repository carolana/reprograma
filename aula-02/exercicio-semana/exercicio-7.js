//Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

let numero1 = 1
let numero2 = 27

if (numero1 > numero2) {
    console.log(`O número ${numero1} é maior`)
} else if (numero1 === numero2) {
    console.log("Os números são iguais")
} else {
    console.log(`O número ${numero2} é maior`)
}