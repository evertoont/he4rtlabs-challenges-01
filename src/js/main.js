// Função para aceitar apenas números no input

function apenasNumeros(evt) {
    let theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    let regex = /^[0-9.]+$/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

// Função de calculo

function calcularValorHora() {

    let resultado = document.getElementById("valorHora");

    let horasDiarias = document.getElementById("horasDiarias").value;
    let diasEfetivos = document.getElementById("diasEfetivos").value;
    let diasFerias = document.getElementById("diasFerias").value;
    let valorProjeto = document.getElementById("valorProjeto").value;

    let valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias)) + ((diasFerias * diasEfetivos * horasDiarias));

    if (horasDiarias == "" || diasEfetivos == "" || diasFerias == "" || valorProjeto == "") {
        resultado.style.color = "black";
        resultado.innerHTML = "Preencha todos os campos";
    } else {
        resultado.style.color = "#8d0cfc";
        resultado.innerHTML = "R$ " + valorHora.toFixed(2);
    }

}