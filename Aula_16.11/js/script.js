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
    const elem = document.createElement('div');
    elem.setAttribute('class', 'box');

    // elem.textContent = count;
    // count++;

    elem.textContent = getCount();

    document.body.appendChild(elem);
}