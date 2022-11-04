// Escreva um programa que dado o valor de uma conta de restaurante, imprima o valor total a ser pago, considerando que o restaurante cobra 10% de taxa para o gar ̧com.

const prompt = require('prompt-sync')();

let vs = prompt('Digite o valor consumido: ');

vs = parseFloat(vs);

let total = vs + vs * 10/100;

console.log(`Valor a ser pago é R$ ${total} reais`);