alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 29;
let chute = prompt('Escolha um número de 1 a 30');

if (numeroSecreto == chute) {
    console.log('Isso ai você acertou o número secreto');
} else {
    console.log('Você errou!');
}