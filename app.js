// let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do número secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número entre 1 e 100:";
let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

 exibirMensagemInicial(); 

console.log (numeroSecreto);

function verificarNumeroEscolhido() {
    let numeroEscolhido = document.querySelector ("input").value;
    
    if (numeroEscolhido == numeroSecreto) {
        exibirTextoNaTela ("h1", "PARABÉNS!!!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!!!`
        exibirTextoNaTela ("p", mensagemTentativas);
        document.getElementById ("reiniciar").removeAttribute ("disabled");
        } else {
        if (numeroEscolhido > numeroSecreto) {
            exibirTextoNaTela ("h1", "TENTE NOVAMENTE!!");
            exibirTextoNaTela ("p", `O número escolhido é menor que ${numeroEscolhido}.`);
        } else {
            exibirTextoNaTela ("h1", "TENTE NOVAMENTE!!");
            exibirTextoNaTela ("p", `O número escolhido é maior que ${numeroEscolhido}.`);
        }
        tentativas ++;
        limparCampo ();
    }
}

function gerarNumeroAleatorio () {
    let numeroSorteado = parseInt (Math.random () * numeroLimite + 1);
    let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosDaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio ();
   } else {
    listaDeNumerosSorteados.push (numeroSorteado);
    console.log (listaDeNumerosSorteados);
    return numeroSorteado;
   }
}
function limparCampo () {
    numeroEscolhido = document.querySelector ("input");
    numeroEscolhido.value = "";
}
function reiniciarJogo () {
    limparCampo ();
    console.clear ();
    numeroSecreto = gerarNumeroAleatorio ();
    console.log (numeroSecreto);
    tentativas = 1;
    exibirMensagemInicial ();
    document.getElementById ("reiniciar").setAttribute ("disabled", true);
}
function exibirMensagemInicial () {
    exibirTextoNaTela ("h1", "Jogo do número secreto");
    exibirTextoNaTela ("p", "Escolha um número entre 1 e 100:");
}

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}