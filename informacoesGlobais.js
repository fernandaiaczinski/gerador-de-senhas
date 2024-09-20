const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'
async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    console.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')           
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_conectadas}</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}</span> horas conectadas.`
// código omitido
    const container = document.getElementById("graficos-container")
    container.appendChild(paragrafo)
    console.log(paragrafo)
}
visualizarInformacoesGlobais()
