// Seleciona os elementos da página
const botaoGerar = document.querySelector('button');
const inputNumero = document.getElementById('numero');
const resultado = document.getElementById('resultado');

// Adiciona o evento de clique no botão
botaoGerar.addEventListener('click', (event) => {
    event.preventDefault();

    const quantidadeJogos = Number(inputNumero.value);

    // Validação simples
    if (quantidadeJogos < 1 || quantidadeJogos > 12 || isNaN(quantidadeJogos)) {
        resultado.innerHTML = '<p style="color: #f43f5e; text-align: center;">⚠️ Escolha entre 1 e 12 jogos.</p>';
        return;
    }

    // Limpa os resultados anteriores
    resultado.innerHTML = '';

    // Gera a quantidade de jogos solicitada
    for (let i = 1; i <= quantidadeJogos; i++) {
        const jogo = gerarDezenas(6, 60);
        
        // Cria um container para cada linha de jogo
        const divJogo = document.createElement('div');
        divJogo.classList.add('linha-jogo');

        // Título do jogo (ex: Jogo 01)
        const tituloJogo = document.createElement('span');
        tituloJogo.classList.add('titulo-jogo');
        tituloJogo.textContent = `${i < 10 ? '0' + i : i}`;
        divJogo.appendChild(tituloJogo);

        // Container para as dezenas em linha
        const divDezenas = document.createElement('div');
        divDezenas.classList.add('dezenas');

        jogo.forEach(num => {
            const spanNumero = document.createElement('span');
            spanNumero.classList.add('bola-numero');
            spanNumero.textContent = String(num).padStart(2, '0');
            divDezenas.appendChild(spanNumero);
        });

        divJogo.appendChild(divDezenas);
        resultado.appendChild(divJogo);
    }
});

// Função que sorteia números sem repetição e os ordena
function gerarDezenas(qtdNumeros, maximo) {
    const dezenas = new Set();

    while (dezenas.size < qtdNumeros) {
        const numeroAleatorio = Math.floor(Math.random() * maximo) + 1;
        dezenas.add(numeroAleatorio);
    }

    return Array.from(dezenas).sort((a, b) => a - b);
}