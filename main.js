

function calcularConta(){
const pegaValorDaConta = document.getElementById("valorConta");
const pegaValorDaTaxa = document.getElementById("valorTaxa");
const pegaQuantidadePessoas = document.getElementById("quantidadePessoas");
const calcValorFinal = (parseInt(pegaValorDaConta.value) + parseInt(pegaValorDaTaxa.value)) / parseInt(pegaQuantidadePessoas.value)
document.getElementById("resultado").innerHTML = calcValorFinal


}


function formEvent() {
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
e.preventDefault();

calcularConta();

});
} 










