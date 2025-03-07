function verficarPrimo(){
    // cria referência aos elementos da página 
    var inNumero = document.getElementById('inNumero');
    var outResposta = document.getElementById('outResposta');

    var num = Number(inNumero.value); //obtém o número informado
    
    //verifica se preencheu corretamente o campo inNumero
    if (num == 0 || isNaN(num)){
        window.alert('Número Inválido');
        inNumero.focus();
        return;
    }
    var numDivisores = 0; //declara e incializa contador 

   //declara e inicializa a variável tipo flag
    var temDivisor = 0;
    //percorre os possíveis divisores do num
    for(var i = 2; i <= num/2; i++){
        if(num % i == 0){
            temDivisor = 1; //muda a flag
             break;
        }
    }
    //se num > 1 e não possui divisor 
    if (num > 1 && !temDivisor){
        outResposta.textContent = num + " " + "É primo";
    }else{
        outResposta.textContent = num + " " + "Não é primo";
    }

}
//referencia elemento e após associa function ao evento click

var btVerificar = document.getElementById('btVerificar');
btVerificar.addEventListener('click', verficarPrimo);