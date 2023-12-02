alert("Bem Vindos ao jogo do número secreto!");
let numeroSecreto = 29;
console.log (numeroSecreto);
let numeroEscolhido
let contadorTentativas = 1;

// enquanto o numero não for igual ao númer secreto
while (numeroEscolhido != numeroSecreto) {
    numeroEscolhido = prompt ("Escolha um número entre 1 e 30:");
    
    // se o nnúmero escolhido for igual ao número secreto
    if (numeroSecreto == numeroEscolhido) {
        // alert ("Parabéns! Você descobriu o número secreto: " + numeroSecreto + "!");
         alert (`Parabéns! Você descobriu o número secreto: ${numeroSecreto} com ${contadorTentativas} tentativa(s)!`);
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