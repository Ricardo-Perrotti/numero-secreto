let sorteados = [];
let faixa = 50;
let tentativas = 1;


let numeroSecreto = gerarNumeroAleatorio(faixa);
console.log(numeroSecreto);


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

mensagemInicio();
verificarChute();

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
        if (chute > 0){
        
            if (chute == numeroSecreto) {
                exibirTextoNaTela('h1', 'Acertou!' );
                let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
                let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
                exibirTextoNaTela('p', mensagemTentativas);
                document.getElementById('reiniciar').removeAttribute('disabled');
            } else {        
                if(chute > numeroSecreto) {                    
                    exibirTextoNaTela('p', 'o número é menor que o seu chute!');
                } else {                
                    exibirTextoNaTela('p', 'O número secreto é maior que seu chute');
                }
                tentativas++;
                limparCampo();
            }
    }
}

function gerarNumeroAleatorio(faixa){
    let numeroEscolhido = parseInt(Math.random() * faixa + 1); 
    let quantidadeElementosLista = sorteados.length;

    if(quantidadeElementosLista == faixa) {
        sorteados = [];
    }

    if(sorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(faixa);
    } else {
        sorteados.push(numeroEscolhido);
        console.log(numeroEscolhido);
        console.log(sorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function mensagemInicio() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um valor entre 1 e ${faixa}`);
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(faixa);
    limparCampo();
    tentativas = 1;
    mensagemInicio();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



