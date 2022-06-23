const botaoAtualizar: any = document.getElementById('atualizar-saldo')
const botaoLimpar: any = document.getElementById('limpar-saldo')
const soma: any = document.getElementById('soma')
const campoSaldo: any = document.getElementById('campo-saldo')

campoSaldo.innerHTML = 0

const somarAoSaldo = (soma: number) => campoSaldo.innerHTML += soma
const limparSaldo = () => campoSaldo.innerHTML = ''

botaoAtualizar.addEventListener('click', () => somarAoSaldo(soma.value))
botaoLimpar.addEventListener('click', () => limparSaldo())

{/*
    <h4>Valor a ser adicionado: <input id="soma"></h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: "<span id="campo-saldo"></span></h1>
*/}
