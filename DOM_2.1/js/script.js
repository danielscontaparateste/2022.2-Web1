function somar(){

    const iptX = document.querySelector("#iptX");

    const x = parseInt(iptX.value);
    const y = parseInt(document.getElementById("iptY").value);

    const res = x + y;

    console.log(`O resultado é: ${res}`);

    const lbRes = document.getElementById("lbResultado");
    lbRes.textContent = "O resultado de "+x+"+"+y+" é igual a "+res; 

    // continue esse codigo para informar se o resultado da soma é par ou impar.

    // Se for par, a msg fica verde e se for impar, vermelho. 

    // Cria um botao para limpar.
    
    const lbParImpar = document.getElementById("lbParImpar");
    const body = document.querySelector("body");
    const divBox = document.querySelector("#box");

    if (res % 2 ==0){
        lbParImpar.innerHTML = "<br>PAR";
        body.style.backgroundColor = "green";
        divBox.style.backgroundColor = "red";
        iptX.style.backgroundColor = "purple"; 
    }else{
        lbParImpar.innerHTML = "<br>IMPAR";
        body.style.backgroundColor = "red";
        divBox.style.backgroundColor = "green";
        iptX.style.backgroundColor = ""; 
    }


}

function limpar(){
    const iptX = document.querySelector("#iptX");
    const iptY = document.getElementById("iptY");
    
    iptX.value = "";
    iptY.value = "";

    const body = document.querySelector("body");
    const divBox = document.querySelector("#box");

    body.style.backgroundColor = "";
    divBox.style.backgroundColor = "";

    const lbRes = document.getElementById("lbResultado");
    const lbParImpar = document.getElementById("lbParImpar");

    lbRes.textContent ="";
    lbParImpar.textContent ="";
}

function showX(){
    const spX = document.querySelector("#spX");
    const iptX = document.querySelector("#iptX");
    spX.innerHTML = iptX.value;



}

function showRgLar(){
    // const iptRg = document.getElementById("iptRgLar");
    // const vrg = iptRg.value;

    // const lbRg = document.getElementById("lbRgLar");
    // lbRg.textContent = vrg;

    document.getElementById("lbRgLar").textContent = document.getElementById("iptRgLar").value;

    const divBox = document.querySelector("#box");
    divBox.style.width = document.getElementById("iptRgLar").value + "px";
}

function showRgAlt(){
    document.getElementById("lbRgAlt").textContent = document.getElementById("iptRgAlt").value;

    const divBox = document.querySelector("#box");
    divBox.style.height = document.getElementById("iptRgAlt").value + "px";
}

function showRgTop(v){
    document.getElementById("lbRgTop").textContent = v;

    const divBox = document.querySelector("#box");
    divBox.style.top = v + "px";
}

function showRgLef(v){
    document.getElementById("lbRgLef").textContent = v;

    const divBox = document.querySelector("#box");
    divBox.style.left = v + "px";
}