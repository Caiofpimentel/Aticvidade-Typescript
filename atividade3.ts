// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campoSaldo');

campoSaldo.innerHTML = "0"

function somarAoSaldo(soma:number) {
    if(campoSaldo){
    campoSaldo.innerHTML + soma;
    }}

function limparSaldo() {
    if(campoSaldo){
    campoSaldo.innerHTML = '';
}}

atualizarSaldo.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

limparSaldo.addEventListener('click', function () {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>

    <button id="atualizarSaldo">Atualizar saldo</button>

    <button id="limparSaldo">Limpar seu saldo</button>

    <h1>"Seu saldo é: " <span id="campoSaldo"></span></h1>
 */