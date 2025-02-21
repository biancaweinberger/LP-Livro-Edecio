function calcularRaiz(){
// cria referência aos elementos da página 
    var inNumero = document.getElementById('inNumero');
    var outResposta = document.getElementById('outResposta');
//obtém conteúdo do campo inNumero
    var numero = Number(inNumero.value);
if (numero == 0 || isNaN(numero)){ //se não preencheu ou NaN
    window.alert('Informe um núemro válido...'); //exibe um alerta 
    inNumero.focus(); //posiciona no campo inNumero
    return; // retorna
}
var raiz = Math.sqrt(numero) //calcula a raiz quadrada do número
//se o valor da variável raiz igual a este valor arredondado para baixo...
    if(raiz == Math.floor(raiz)){
        outResposta.textContent = 'Raiz: ' + raiz; //mostra a raiz
    }else{
        //senão, exibe a mensagem indicando que não há raiz exata
        outResposta.textContent = "Não há raiz exata para " + numero;
    }
}
//cria referência ao elemento btExibir e registra evento que irá carregar a function
var btExibir = document.getElementById('btExibir');
btExibir.addEventListener('click', calcularRaiz);