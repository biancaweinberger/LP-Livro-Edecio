function mostrarPromocao(){
    var inProduto = document.getElementById('inProduto');
    var inPreco = document.getElementById('inPreco');
    var preco = Number(inPreco.value);
    var _promocao = (preco * 2);
    var promoc_ao = (preco * 0.50);
    var promocao = (preco * 2) + (preco * 0.50);
    outPromocao.textContent = `${inProduto.value.toUpperCase()} - Promoção: Leve 3 por R$ ${promocao.toFixed(2)}`;
    outDescricao.textContent = `O 3º produto custa apenas R$: ${promoc_ao.toFixed(2)}`;
}
var btVerPromocao = document.getElementById('btVerPromocao');
btVerPromocao.addEventListener('click', mostrarPromocao);