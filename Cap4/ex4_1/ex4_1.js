function mostrarTabuada(){
    // cria referência aos elementos da página 
    var inNumero = document.getElementById('inNumero');
    var outTabuada = document.getElementById('outTabuada');
    //converte conteúdo do campo inNumero
    var numero = Number(inNumero.value);
    //valida o numero
    if(numero == 0 || isNaN(numero)){
        window.alert('Informe um número válido...');
        inNumero.focus()
        return;
    }
    // cria uma vriável do tipo String, que irá concatenar a resposta 
    var resposta = '';
    // cria um laço de repetição 
    for (var i = 1; i <= 10; i++){
        // a váriavel resposta vai acumulando os novos conteúdos 
        resposta = resposta + numero + "x" + i + "=" + numero * i + "\n";
    }
    // o conteúdo da tag pre é alterado para exibir a tabuada do numero
    outTabuada.textContent= resposta;
}
// cria referência ao botão e após associa function ao evento click
var btMostrar = document.getElementById('btMostrar');
btMostrar.addEventListener('click', mostrarTabuada);