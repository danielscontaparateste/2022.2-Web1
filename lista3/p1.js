const prompt = require('prompt-sync')();

let a = parseInt(prompt('Digite o primeiro numero'));
let b = parseInt(prompt('Digite o segundo numero'));

let op = parseInt(prompt('1. Somar 2. Subtrair 3.Multiplicar 4.Dividir '));

switch(op){
    case 1: 
        c = a + b;
    break;
    case 2: 
        c = a - b;
    break;
    case 3:
        c = a * b;
    break;
    case 4:
        c = a / b;
    break;        
    default:
        console.log(`Opcao nao valida`);        
        return; 
}

console.log(`Resultado: ${c}`);

if (c % 2 == 0){
    console.log(`Resultado PAR`);
}else{
    console.log(`Resultado IMPAR`);
}
