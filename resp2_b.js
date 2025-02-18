function mostrarCalcular(){
    var inValor = document.getElementById('inValor');
    var inTempo = document.getElementById('inTempo');
    var pagar = Math.floor(parseFloat(inValor.value * inTempo.value)/ 15);
    outPagar.textContent = `Valor a Pagar R$: ${pagar.toFixed(2)}`;
    
}
var inPagar = document.getElementById('inPagar');
inPagar.addEventListener('click', mostrarCalcular);