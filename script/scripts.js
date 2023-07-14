import imprimeCotacaoDolar from "./imprimirDolar.js";
import imprimeCotacaoIene from "./imprimirIene.js";
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

// Iene
const graficoIene = document.getElementById('graficoIene');

const graficoParaIene = new Chart(graficoIene, {
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

let workerIene = new Worker('./script/workers/workerIene.js');
workerIene.postMessage("iene");

workerIene.addEventListener("message", event => {
    let tempo = geraHorario();
    let valor = event.data.ask;
    imprimeCotacaoIene("iene", valor);
    adicionarDados(graficoParaIene, tempo, valor);
})