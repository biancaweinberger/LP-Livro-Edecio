function mostrarEstrelas(){
    //cria referencia aos eleemntos html manipulados pela function
   var inNumero = document.getElementById('inNumero');
   var outResposta = document.getElementById('outResposta');
    
   var num = Number(inNumero.value); // obtem conteudo do campo inNumero

   if (num == 0 || isNaN(num)){
    window.alert('Informe um número válido')
    inNumero.focus();
    return;
   }
   var estrelas = "" //declara variável que irá concatenar as estrelas/traços 
   //cria um laço de retepetição de 1 até o número informado 
   for(var i = 1; i <= num; i++){
    if (i % 2 == 1){
        estrelas = estrelas + "*"; // na posção ímpar do i: *
    }else {
        estrelas = estrelas + "-"; // na posição par: -
    }
   }
   outResposta.textContent = estrelas; // exibe as estrelas 
}
var btPreencher = document.getElementById('btPreencher');
btPreencher.addEventListener('click', mostrarEstrelas)