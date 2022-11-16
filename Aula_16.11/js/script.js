var count=0;

function criarMsg(){
    const elem = document.createElement('p');
    elem.textContent = "Oi turma! Fui criado pelo seu clique.";

    document.body.appendChild(elem);

}

function getCount(){
    return ++count;
}

function criarBox(){
    const qtdMax =parseInt(document.querySelector("#iptMax").value);
    const bttCriarBox = document.querySelector("#bttCriarBox");
    
    if (count<qtdMax){
        const elem = document.createElement('div');
        var ct = getCount();
        elem.setAttribute('class', 'box');
        elem.setAttribute('id',ct);
        elem.textContent = ct;
        document.body.appendChild(elem);
    }
    
    if (count==qtdMax){
        bttCriarBox.disabled = true;
    }
}

function removerBox(){
    const idElemRem = parseInt(document.querySelector("#iptRem").value);
    const elem = document.getElementById(idElemRem);
    elem.remove();
}