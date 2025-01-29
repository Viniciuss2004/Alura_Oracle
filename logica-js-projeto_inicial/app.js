alert('Boas vindas ao jogo do número secreto!');

let numMaximo = 100;

let numeroSecreto = parseInt(Math.random() * numMaximo + 1);
console.log("número secreto é " + numeroSecreto);

let chute;
let tentativas = 1;

while (chute != numeroSecreto) {

    chute = prompt(`Escolha um número de 1 a ${numMaximo}`); 

    if (numeroSecreto == chute) {
        break;
    } else {
        if (numeroSecreto > chute) {
            alert(`Você errou! O número secreto é maior que ${chute}!`);
        } else {
            alert(`Você errou! O número secreto é menor que ${chute}!`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 

alert(`Isso ai! você acertou, o número secreto é (${numeroSecreto}) e precisou de ${tentativas} ${palavraTentativa} para acertar :)`);