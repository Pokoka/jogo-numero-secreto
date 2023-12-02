alert("Bem Vindos ao jogo do número secreto!");
let numeroSecreto = parseInt (Math.random() * 100 + 1);
console.log (numeroSecreto);
let numeroEscolhido
let contadorTentativas = 1;

// enquanto o numero não for igual ao númer secreto
while (numeroEscolhido != numeroSecreto) {
    numeroEscolhido = prompt ("Escolha um número entre 1 e 100:");
    
    // se o nnúmero escolhido for igual ao número secreto
    if (numeroSecreto == numeroEscolhido) {
        // não continua
        break;
        // alert ("Parabéns! Você descobriu o número secreto: " + numeroSecreto + "!");
    } else {
        if (numeroEscolhido > numeroSecreto) {
            alert (`O número secreto é maenor que ${numeroEscolhido}!`);
        } else {
            alert (`O número secreto é maior qur ${numeroEscolhido}!`);
        }
        // ++ incrementa em 1 o valor
        contadorTentativas ++;
     } 
}

let palavraTentativa = contadorTentativas > 1 ? "tentativas" : "tentativa";
alert (`Parabéns! Você descobriu o número secreto: ${numeroSecreto} com ${contadorTentativas} ${palavraTentativa}!`);

//if (contadorTentativas > 1) {
  //  alert (`Parabéns! Você descobriu o número secreto: ${numeroSecreto} com ${contadorTentativas} tentativas!`);
//} else {
  //  alert (`Parabéns! Você descobriu o número secreto: ${numeroSecreto} com ${contadorTentativas} tentativa!`);
//}