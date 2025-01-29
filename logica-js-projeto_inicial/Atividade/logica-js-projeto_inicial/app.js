// ATIVIDADE 1

// Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert('Boas vindas ao nosso site!');

// Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nomePlaneta = "Lua";

// Crie uma variável chamada idade e atribua a ela o valor 25.
let idade = 25;

// Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;

// Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000;

// Exiba um alerta com o texto "Erro! Preencha todos os campos".
alert('Erro! Preencha todos os campos');

// Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos".
let mensagemDeErro = "Erro! Preencha todos os campos";

// Agora exiba um alerta com o valor da variável mensagemDeErro.
alert(mensagemDeErro);

// Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
nome = prompt("Qual é o nome do usuário?");

// Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
idade = prompt("Qual é a idade do usuário?");
idade = parseInt(idade); // Converta o valor da idade para número, já que o prompt retorna uma string.

// Agora, caso a idade seja maior ou igual a 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if (idade >= 18) {
    alert('Pode tirar a habilitação!');
}




// ATIVIDADE 2

console.log('boas-vindas');

let nome = 'Vinicius';
console.log(`Olá, ${nome}`);

let nome1 = 'Lara';
alert(`Olá, ${nome1}`);

resposta = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(resposta);

let valorSom1 = 10;
let valorSom2 = 8;
let resultadoSom = valorSom1 + valorSom2;
console.log(`A soma de ${valorSom1} e ${valorSom2} é igual a ${resultadoSom}.`);

let valorSub1 = 10;
let valorSub2 = 8;
let resultadoSub = valorSub1 - valorSub2;
console.log(`A diferença entre ${valorSub1} e ${valorSub2} é igual a ${resultadoSub}.`);

idadeUsuario = prompt('Qual sua idade?');

if(idadeUsuario >= 18) {
    console.log('Você é maior de idade!');
}else{
    console.log('Você é menor de idade!');
}

num = prompt('Diga um número:');

resp = num > 0 ? 'Positivo': num == 0 ? 'É 0': 'Negativo';
console.log(resp);

let cont = 1;
while(cont <= 10) {
    console.log(cont);
    cont++;
}

let nota = 6;
resultado = nota >= 7 ? 'Aprovado': 'Reprovado';
console.log(resultado);

let numAleatorio = Math.random();
console.log(numAleatorio)

let numAleatorio1 = parseInt(Math.random() * 10 + 1);
console.log(numAleatorio1)

let numAleatorio2 = parseInt(Math.random() * 1000 + 1);
console.log(numAleatorio2)