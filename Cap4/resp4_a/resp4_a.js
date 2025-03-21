const inNumero = document.getElementById('inNumero');
const outResposta = document.getElementById('outResposta');

function mostrarRepeticao(){
const inFruta = document.getElementById('inFruta').value;
  var num = Number(inNumero.value);
  if (num == 0 || isNaN(num) || inFruta === ""){
    window.alert('Informe um número válido e uma fruta!');
    inNumero.value = "";
    inNumero.focus();
    return; 
  }
  var estrelas = "";
  for (var i = 1; i <= num; i++){
  estrelas += inFruta + "*" ;
  }
 
  outResposta.textContent = estrelas;
}

var btRepeticao = document.getElementById('btRepeticao');
btRepeticao.addEventListener('click', mostrarRepeticao);