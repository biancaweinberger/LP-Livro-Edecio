function mostrarPromocao (){
    var inMedicamento = document.getElementById("inMedicamento");
    var inPreco = document.getElementById("inPreco");
    var promocao = Math.floor(parseFloat(inPreco.value) * 2); //Converte o valor inPreco para número
    outValor.textContent = `Promoção de ${inMedicamento.value}`; 
    outPromocao.textContent = `Leve 2 por apenas R$ ${promocao.toFixed(2)}` ;
}
var btMostrar = document.getElementById('btMostrar');
btMostrar.addEventListener('click', mostrarPromocao);