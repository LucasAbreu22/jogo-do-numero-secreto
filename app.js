let listaNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;
//teste de commit  Eduardo Afonso
console.log("teste")

function exibirTextoNaTela(tag, texto)
{
    let campo =  document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

exibirMensagemInicial();

function verificarChute()
{
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto)
    {
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativas';

        exibirTextoNaTela('h1', `Você acertou o número secreto com ${tentativa} ${palavraTentativa}!`);

        let button = document.getElementById("reiniciar").removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto)
        {
            exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }

        tentativa++;

        limparCampo();
    }
}

function gerarNumeroAleatorio()
{
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumerosSorteados.length;

    if(quantidadeElementosLista == numeroLimite)
    {
        listaNumerosSorteados = [];
    }
    
    if(listaNumerosSorteados.includes(numeroEscolhido))
    {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo()
{
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirMensagemInicial()
{
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
    
}

function reiniciarJogo()
{
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    tentativa = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}