// ATIVIDADE 1

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarChute() {
    console.log('Botão foi clicado');
    alert('Eu amo JS');
    promptPergunta();
    soma();
}

function promptPergunta() {
    let cidade = prompt('Qual o nome de uma cidade do Brasil?');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function soma() {
    let valor1 = parseInt(prompt('Diga um valor:'));
    let valor2 = parseInt(prompt('Diga outro valor:'));

    let resultadoSoma = valor1 + valor2;

    alert(`O resultado da soma é ${resultadoSoma}`);
}

// ATIVIDADE 2

function boasVindas() {
    console.log('Olá, mundo!')
}

boasVindas();

let nome = 'Vinicius';
function nomeUsuario(nome) {
    console.log(`Olá, ${nome}!`)
}

nomeUsuario(nome);

let num = 6;
function dobroDoNumero(num) {
    return console.log('Dobro do número é ' + num * 2);
}

dobroDoNumero(num);

let valor1 = 2;
let valor2 = 4;
let valor3 = 6;
function mediaDosValores(valor1, valor2, valor3) {
    return console.log('Média dos Três valores é ' + (valor1 + valor2 + valor3) / 3);
}

mediaDosValores(valor1, valor2, valor3);

let num1 = 6;
let num2 = 5;
function maiorNumero(num1, num2) {
    let maior = num1 == num2 ? 'Os dois números são iguais!' : num1 > num2 ? `${num1} é maior que ${num2}` : `${num2} é maior que ${num1}`;
    return console.log(maior);
}

maiorNumero(num1, num2);

let numeroMulti = 3;
function multiplicarPeloPropioNumero(numeroMulti) {
    return console.log(`Resultado de multipilcar ${numeroMulti} por ele mesmo é ` + numeroMulti * numeroMulti);
}

multiplicarPeloPropioNumero(numeroMulti);

// ATIVIDADE 3

let altura = 1.72 * 1.72;
let peso = 63;
function calculoIMC(altura, peso) {
    let resultIMC = peso / altura;
    return console.log(resultIMC);
}

calculoIMC(altura, peso);

function calcularFatorial(n) {
    if (n < 0) {
        console.log("Número deve ser não negativo.");
    }

    let fatorial = 1;
    for (let i = 1; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}

const numero = 5;
console.log(`O fatorial de ${numero} é: ${calcularFatorial(numero)}`);

let valorDinheiro = 1000.00;
let cotacaoDolar = 4.80;
function converterEmReais(valorDinheiro, cotacaoDolar) {
    let dinheiroConvertido = valorDinheiro * cotacaoDolar;
    return console.log(`Valor em Dólar ${valorDinheiro}, valor convertido em Real ${dinheiroConvertido}`)
}

converterEmReais(valorDinheiro, cotacaoDolar);

// Função para calcular área e perímetro de uma sala retangular
function salaRetangular(altura, largura) {
    const area = altura * largura;
    const perimetro = 2 * (altura + largura);

    console.log(`Sala Retangular:`);
    console.log(`Área: ${area} m²`);
    console.log(`Perímetro: ${perimetro} m`);
}

// Função para calcular área e perímetro de uma sala circular
function salaCircular(raio) {
    const pi = 3.14;
    const area = pi * raio * raio;
    const perimetro = 2 * pi * raio;

    console.log(`Sala Circular:`);
    console.log(`Área: ${area.toFixed(2)} m²`);
    console.log(`Perímetro: ${perimetro.toFixed(2)} m`);
}

// Exemplos de uso
salaRetangular(5, 10); // Altura = 5, Largura = 10
salaCircular(7);       // Raio = 7

let numm = 2;
function tabuadaNumero(numm) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numm} x ${i} = ${numm * i}`);
    }
}

tabuadaNumero(numm);
