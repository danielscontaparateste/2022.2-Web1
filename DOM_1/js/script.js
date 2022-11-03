function trocarCorFundo(){
    // alert("Tou na funcao");
    var body = document.querySelector("body");
    body.style.backgroundColor = "green";
}

function aumentarFonte(){
    var p = document.querySelector("#saudacao");

    p.style.fontSize = "200%";

    var btt = document.querySelector("#bttAF");
    btt.value = "Restaurar a Fonte";

    

}

/* Exercício: Continuar o script e implementar o método necessário para restaurar a fonte aumentada */
/* Veja addListenerEvent() */