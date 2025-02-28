function listarNumeros(){
    // cria referência aos elementos que a function irá manipular 
    var inNumero = document.getElementById('inNumero');
    var outResposta = document.getElementById('outResposta');
    var numero = Number(inNumero.value); //obtém o número informado
    // verifica validade do número
    if (numero == 0 || isNaN(numero)){
        window.alert('Informe um número válido...');
        inNumero.focus()
        return;
    }
    //inicializa variável reposta 
    var resposta = "Entre " + numero + " " + "e 1: ";
    // cria um for decrescente 
    for (var i = numero; i > 0; i = i - 1) { //pode ser feito: (i = numero; i > 0; i = i--)
        if (i == 1){
            resposta = resposta + i + " " + "."; //criação de condicional para no final do programa colocar "." invés de "," generalizando.
        } else{
            resposta = resposta + i + " " +","; //resposta vai acumulando números (e vírgulas)
        }
        
    }
    //altera o conteúdo de outResposta 
    outResposta.textContent = resposta;
}
//referência ao elemento e após associa function ao evento click
var btDecrescer = document.getElementById('btDecrescer');
btDecrescer.addEventListener('click', listarNumeros);