function calcularFuso(){
    //cria uma referência aos elementos da página 
   var inHoraBrasil = document.getElementById('inHoraBrasil');
   var outHoraFranca = document.getElementById('outHoraFranca');
   //obtém e converte o conteúdo do campo inHoraBrasil
   var horaBrasil = Number(inHoraBrasil.value);
   //se não preencheu o número corretamente ou Not-a-Number(NaN)
   if (inHoraBrasil.value == '' || isNaN(horaBrasil)){
    window.alert('Informe a hora no Brasil corretamente');
    inHoraBrasil.focus(); //foco no campo inHoraBrasil e retorna à página 
    return;
   }
   //calcula o valor de diferença com a França
   var horaFranca = horaBrasil + 5;
   //se passar horário das 24 horas na França...
   if(horaFranca > 24){
    horaFranca = horaFranca - 24; //subtrai 24, ex: se no Brasil for 20 horas o programa não pode informar que na frança é 25 horas, por isso subtrai por 24 para saber que é outro dia
   }
   //exibe resposta (altera conteúdo do elemento outHoraFranca)
   outHoraFranca.textContent = 'Hora na França: ' + horaFranca.toFixed(2); //o valor da variável horaFranca é atribuído à propriedade textContent, junto com um texto inicial, de modo a exibir o valor calculado
}
//cria uma referência ao elemento btExibir e registra o evento associado a function
var btExibir = document.getElementById('btExibir');
btExibir.addEventListener('click', calcularFuso);