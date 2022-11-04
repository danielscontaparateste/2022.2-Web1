function calcular(){
    let vs = document.querySelector("#iptVs");
    vs = parseFloat(vs.value);

    let total = vs + vs * 10/100;

    let lb = document.querySelector("#lbTotal");
    lb.textContent = "Valor a ser pago pelo cliente: R$ "+total+" reais.";
}