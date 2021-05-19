console.log("Hello Reprograma!")

//console.log(document.querySelector("h1"))
//console.log(document.querySelector("button"))
//console.log(document.getElementById("respostaAno"))

//Estou criando uma varivael e guardando o elemento do htmnl que tem o id ano
var ano = document.getElementById("ano")
//console.log(ano.value)

//Estou criando uma varivael e guardando o elemento do htmnl que tem o id respostaAno
var resposta = document.getElementById("respostaAno")
//console.log(resposta)

//Estou imprimindo no console as minhas variaveis criadas que possuem os nomes ano, botão e resposta
console.log(ano, resposta)

// Estou criando uma função que liga o clique do botão no html tem o identificador button
function cliquei() {
    //resposta.innerText = ano.value vai trocar o texto "resposta" pelo valor digitado
   // estou recuperando a variável resposta e trocando o valor dela pelo input que esta guardado no input ano
    respostaAno.innerText = ano.value 
}
