const lista = document.getElementById('Iene');

function imprimeCotacaoIene(nome, valor) {
    lista.innerHTML = '';

    for (let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) {

        nome = setMoneyName(multiplicador);

        const listaItem = document.createElement('li');
        listaItem.innerHTML = `${multiplicador} ${nome}: R$${(valor * multiplicador).toFixed(2)}`
        lista.appendChild(listaItem)
    }
}

function setMoneyName(value) {
    return (value == 1) ? 'Iene' : 'Ienes';
}

export default imprimeCotacaoIene