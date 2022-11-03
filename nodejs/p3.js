const prompt = require('prompt-sync')();

// var numbers = [1, 2, 10, 8, 9];

// var numbers = new Array(1, 5, 3, 10);

// numbers[0] = 1;
// numbers[1] = 30;
// numbers[2] = 5;

const qtdNumbers = 5;

console.log('Digite os numeros: ');

var numbers = [];
for (let i=0; i<qtdNumbers; i++ ){
    numbers[i] = parseInt(prompt());
}

console.log("=====");
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

let soma = 0;
for (let i = 0; i<numbers.length; i++){
    soma = soma + numbers[i]; // soma += numbers[i]
}

console.log("=====");
console.log(`Somatorio: ${soma}`);

var menor = menorElemento(numbers);

console.log("=====");
console.log(`Menor valor do vetor: ${menor}`);


function menorElemento(v){
    let menor = v[0];
    for (let k=1; k<v.length; k++){
        if (menor > v[k]){
            menor = v[k];
        }
    }
    return menor;
}