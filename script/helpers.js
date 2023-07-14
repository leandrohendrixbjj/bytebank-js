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

export { geraHorario, adicionarDados } 
