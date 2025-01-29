let listaDeNumerosSorteados = [];

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

let tentativas = 1;

function verificarChute() {
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let chute = document.querySelector('input').value;

    if (numeroSecreto == chute) {
        exibirTextoNaTela('h1', 'Acertouu!');
        exibirTextoNaTela('p', `Número secreto era (${numeroSecreto}) e precisou de ${tentativas} ${palavraTentativa} para acertar :)`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto > chute) {
            exibirTextoNaTela('P', `O número secreto é maior que ${chute}!`);
        } else {
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}!`);
        }
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroSorteado = parseInt(Math.random() * 10 + 1);
    if (listaDeNumerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
