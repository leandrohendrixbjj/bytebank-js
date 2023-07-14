function geraHorario() {
    let data = new Date()
    let horario = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds()
    return horario
}

function adicionarDados(grafico, legenda, dados) {
    grafico.data.labels.push(legenda)
    grafico.data.datasets.forEach((dataset) => {
        dataset.data.push(dados)
    })
    return grafico.update();
}

function graficoParaDolar(graficoDolar) {
    return new Chart(graficoDolar, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Dolar',
                data: [],
                borderWidth: 1
            }]
        },
    });
}

function graficoParaIene(graficoIene) {
    return new Chart(graficoIene, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Iene',
                data: [],
                borderWidth: 1
            }]
        },
    });
}

export { geraHorario, adicionarDados, graficoParaDolar, graficoParaIene } 
