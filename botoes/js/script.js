var bttSorteado = 3;
var tentativas = 0;

function gerarBotoes(){
    const qtd = 5;
    const ctn = document.querySelector("#container");

    alert(localStorage.getItem("record"));

    for (let k=0; k<qtd; k++){
        var bt = document.createElement("div");
        bt.setAttribute("class","btts");
        bt.setAttribute("id",k);
        bt.textContent=k;
        bt.addEventListener("click", function () {
            tentativas = tentativas + 1;
            if (this.id == bttSorteado){
                alert("Sorteado :)");
                alert(tentativas);
                localStorage.setItem("record", tentativas);
            }else{
                alert("Errou!");
            }
        } );
        ctn.appendChild(bt);
    }        

}

// function tratarBt() {
//   alert("OI");
// }

