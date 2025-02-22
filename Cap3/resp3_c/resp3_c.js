function calcularValor(){
    var inValor = document.getElementById('inValor');
    var valor = Number(inValor.value);
    var trocoMin = (valor - 1.00).toFixed(2);
    var trocoMax = (valor - 3.00).toFixed(2);
    var trocoMed = (valor - 1.75).toFixed(2);
    if (valor < 1){
        outTempo.textContent = 'Valor Insuficiente';
    } else if (valor >= 1.00 && valor < 1.75){
        outTempo.textContent = `Tempo: 30 min!`;
        outTroco.textContent = `Troco R$: ${trocoMin}`;
    } else if (valor >= 1.75 && valor < 3.00){
        outTempo.textContent = `Tempo: 60 min!`
        outTroco.textContent = `Troco R$: ${trocoMed}`;
     }else{
        outTempo.textContent = `Tempo: 120 min!`;
        outTroco.textContent = `Troco R$: ${trocoMax}`;
     }
}
var btConfirmacao = document.getElementById('btConfirmacao');
btConfirmacao.addEventListener('click', calcularValor);
