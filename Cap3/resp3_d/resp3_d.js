function verificarLados(){
    var inLadoA = Number(document.getElementById('inLadoA').value);
    var inLadoB = Number(document.getElementById('inLadoB').value);
    var inLadoC = Number(document.getElementById('inLadoC').value);
    var outLados = document.getElementById('outLados');
    var outTipo = document.getElementById('outTipo');
    if (inLadoA <= 0 || inLadoB <= 0 || inLadoC <= 0){
        outLados.textContent = 'Insira os valores válidos para os lados';
        return;
    }
    if (inLadoA >= inLadoB + inLadoC || inLadoB >= inLadoA + inLadoC || inLadoC >= inLadoA + inLadoB){
        outLados.textContent = 'Lados não podem formar um triângulo';
        outTipo.textContent = '';
        return;
    }
    // verificação primeiro do escaleno e depois o isósceles, pois todo triângulo isósceles pode ser escaleno.
    if(inLadoA === inLadoB && inLadoB === inLadoC && inLadoC === inLadoA){
        outLados.textContent = 'Lados podem formar um triângulo';
        outTipo.textContent = 'Tipo: Equilátero';

    }
     else if (inLadoA == inLadoB || inLadoA == inLadoC || inLadoB == inLadoC){
        outLados.textContent = 'Lados podem formar um triângulo';
        outTipo.textContent = 'Tipo: Isósceles';
    } else {
        outLados.textContent = 'Lados podem formar um triângulo';
        outTipo.textContent = 'Tipo: Escaleno';
}
    } 
    var btVerificar = document.getElementById('btVerificar');
    btVerificar.addEventListener('click', verificarLados);
    
    function Limpar(){
        location.reload();
        inLadoA = '';
        inLadoB = '';
        inLadoC = '';
    }
    var btLimpar = document.getElementById('btLimpar');
    btLimpar.addEventListener('click',Limpar);