import imprimeCotacaoIene from "./print/iene.js";
import { geraHorario, adicionarDados, graficoParaIene } from "./helpers.js"

const graficoIene = document.getElementById('graficoIene')
const chartIene = graficoParaIene(graficoIene)

let workerIene = new Worker('./script/workers/iene.js')
workerIene.postMessage("iene")

workerIene.addEventListener("message", event => {
    let tempo = geraHorario();
    let valor = event.data.ask;
    imprimeCotacaoIene("iene", valor);
    adicionarDados(chartIene, tempo, valor);
})