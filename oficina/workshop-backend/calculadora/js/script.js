console.log("Hello Reprograma")

//Quero calcular o valor da minha hora de trabalho

//capturar os valores de input da quantidade por mês
// capturar o input de horas por dia
//clicar no botão
//Exbibir o resultado

var ganhoMes = document.getElementById("ganho-mes")
var horasDias = document.getElementById("horas-dia")
var resposta = document.getElementById("resposta")
 
 function calcularValorHora() {
     var totalHorasMes = horasDias.valueAsNumber * 22
     var valorHora = (ganhoMes.valueAsNumber/totalHorasMes).toFixed(2)
     //console.log(valorHora)
     resposta.innerText = "R$" + valorHora
    }