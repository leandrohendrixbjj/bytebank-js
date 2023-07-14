import imprimeCotacaoDolar from "./imprimirDolar.js";
import { geraHorario, adicionarDados, graficoParaDolar } from "./helpers.js"

const graficoDolar = document.getElementById('graficoDolar')
const chartDolar = graficoParaDolar(graficoDolar)

let workerDolar = new Worker('./script/workers/workerDolar.js')
workerDolar.postMessage("usd")

workerDolar.addEventListener("message", event => {
    let tempo = geraHorario();
    let valor = event.data.ask;
    imprimeCotacaoDolar("dolar", valor);
    adicionarDados(chartDolar, tempo, valor);
})

