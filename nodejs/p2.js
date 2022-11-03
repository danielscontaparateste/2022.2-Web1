const prompt = require('prompt-sync')();

let a = parseInt(prompt('Digite o primeiro numero'));
let b = parseInt(prompt('Digite o segundo numero'));

// Para o laco for
console.log(`Usando o laco for`);
for (let i=a; i<b; i++){
    console.log(i);
}

console.log(`Usando o laco while`);
i = a;
while(i<b){
    console.log(i);
    i++;
}

console.log(`Usando o laco do-while`);
i = a;
do{
    console.log(i);
    i++;
}while(i<b);



