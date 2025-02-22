function mostrarNumero(){
    var inNumero = document.getElementById('inNumero');
    var outResposta =  document.getElementById('outResposta');
    var numero = Number(parseInt(inNumero.value));
    if (numero == 0 || isNaN(numero)){
        window.alert('Informe um valor válido!');
        numero.focus();
        return;
    }
    if (numero % 2 != 0){
        outResposta.textContent = `Resposta: ${numero} é Ímpar`;
    }else{
        outResposta.textContent = `Resposta: ${numero} é Par`;
    }
}
    var btVerificar = document.getElementById('btVerificar');
    btVerificar.addEventListener('click', mostrarNumero);
    
    function limparDados(){
        location.reload();
        document.getElementById('inNumero').focus();
    }
    var btLimpar = document.getElementById('btLimpar');
    btLimpar.addEventListener('click', limparDados);