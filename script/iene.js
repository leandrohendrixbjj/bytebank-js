import imprimeCotacaoIene from "./imprimirIene.js";
import { geraHorario, adicionarDados } from "./helpers.js"

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