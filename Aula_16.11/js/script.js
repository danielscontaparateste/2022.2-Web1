function criarMsg(){
    const elem = document.createElement('p');
    elem.textContent = "Oi turma! Fui criado pelo seu clique.";

    document.body.appendChild(elem);

}

function criarBox(){
    const elem = document.createElement('div');
    elem.setAttribute('id', 'box');

    document.body.appendChild(elem);
}