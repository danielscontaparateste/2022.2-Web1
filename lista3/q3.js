// Escreva um programa que calcule e apresente o valor do volume de um caixa retangular utilizando a f ́ormula VOLUME = COMPRIMENTO * LARGURA * ALTURA.

const prompt = require('prompt-sync')();

let comprimento = prompt('Digite o comprimento: ');
let altura = prompt('Digite a altura: ');
let largura = prompt('Digite a largura: ');

let volume = parseFloat(comprimento) + parseFloat(altura) + parseFloat(largura);

console.log(`Volume da Caixa: ${volume}`);
