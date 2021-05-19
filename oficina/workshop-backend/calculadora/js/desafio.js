console.log("Eu consegui!")

var valorHora = document.getElementById("valor-hora")
var horasProjeto = document.getElementById("horas-projeto")
var resposta = document.getElementById("resposta")

function calcularProjetoTeste() {
    var valorTotalProjeto = (valorHora.valueAsNumber * horasProjeto.valueAsNumber).toFixed(2)
    resposta.innerText = "R$" + " " + valorTotalProjeto
}
