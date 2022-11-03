var g = 5;

function mostrar(){
    const bttMostrar = document.querySelector("#iptNome");
    
    const nome = bttMostrar.value;
    
    const spMsg = document.querySelector("#spMsg");

    // equivalente ao print 
    // console.log("O nome digitado é: " + nome + ". Tudo bem?");
    console.log(`O nome digitado é: ${nome}. Tudo bem? - Com template de string.`);

    spMsg.innerHTML = "O nome digitado é: " + nome;

    var g = 100;

    let x = 2;

    {
        let x = "OI";
        // x = 10;
    }

    console.log(x*this.g);

}