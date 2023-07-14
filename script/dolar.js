import imprimeCotacaoDolar from "./imprimirDolar.js";
import { geraHorario, adicionarDados } from "./helpers.js"

const graficoDolar = document.getElementById('graficoDolar');

const graficoParaDolar = new Chart(graficoDolar, {
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

let workerDolar = new Worker('./script/workers/workerDolar.js');
workerDolar.postMessage("usd");

workerDolar.addEventListener("message", event => {
    let tempo = geraHorario();
    let valor = event.data.ask;
    imprimeCotacaoDolar("dolar", valor);
    adicionarDados(graficoParaDolar, tempo, valor);
})

