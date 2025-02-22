function velocidadePermitida(){
    var inPermitida = document.getElementById('inPermitida');
    var inCondutor = document.getElementById('inCondutor');
    var permitida = Number(inPermitida.value);
    var condutor = Number(inCondutor.value);
    var outSituacao = document.getElementById('outSituacao')
    var veloAcima = (condutor - permitida);
    var vintePorcento = permitida * 0.2;
    if (permitida <= 0 || isNaN(permitida) || condutor < 0 || isNaN(condutor)){
        window.alert('Informe um número válido!')
       inPermitida.focus(); // foco no primeiro campo 
        return;
    }
    if (condutor <= permitida){
        outSituacao.textContent = 'Situação: Sem Multa';
    } else if (veloAcima >= vintePorcento){
        outSituacao.textContent = 'Situação: Multa Grave';
    } else {
        outSituacao.textContent = 'Situação: Multa Leve';
    }
}
var btVerificar = document.getElementById('btVerificar');
btVerificar.addEventListener('click', velocidadePermitida);
