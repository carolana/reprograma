//Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
    //- Se a media for igual ou maior que 7 - Aprovado
    //- Se a media for maior e igual a cinco e menor que 7 - Recuperação
    //- Se a media for menor que 5 - Reprovado

let nota1 = 9.1
let nota2 = 5
let nota3 = 7
let media = (nota1+nota2+nota3)/3

if (media >= 7) {
    console.log(`Parábens! Você foi aprovado.`)
} else if ((media >= 5) && (media < 7 )) {
    console.log(`Você ficou de recuperação.`)
} else {
    console.log(`Que triste! Você foi reprovado.`)
}