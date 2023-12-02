alert("Bem Vindos ao jogo do número secreto!");
let numeroSecreto = 2;

console.log (numeroSecreto);

let numeroEscolhido = prompt("Escolha um número entre 1 e 30:");

// se o nnúmero escolhido for igual ao número secreto
if (numeroSecreto == numeroEscolhido) {
   // alert ("Parabéns! Você descobriu o número secreto: " + numeroSecreto + "!");
    alert (`Parabéns! Você descobriu o número secreto: ${numeroSecreto}!`);
} else {
    alert ("Que pena, você errou :(");
}
