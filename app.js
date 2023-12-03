// let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do número secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número entre 1 e 100:";
let numeroSecreto = gerarNumeroAleatorio ();

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela ("h1", "Jogo do número secreto");
exibirTextoNaTela ("p", "Escolha um número entre 1 e 100:");
console.log (numeroSecreto);

function verificarNumeroEscolhido() {
    let numeroEscolhido = document.querySelector ("input").value;
    console.log ("O botão foi clicado");
    console.log (numeroEscolhido == numeroSecreto);
}

function gerarNumeroAleatorio () {
   return parseInt (Math.random () * 100 +1);
}