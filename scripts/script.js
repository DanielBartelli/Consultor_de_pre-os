function consultarPreco() {
    var produtoInput = document.getElementById('produto-Input').value;
    var preco = Math.random() * (100 - 1) + 1;
    document.getElementById('res').innerText = "Preço do produto '" + produto-Input + "': R$ " + preco.toFixed(2);
}


function comprarProduto() {
    var produtoInput = document.getElementById('produto-Input').value;
    document.getElementById('res').innerText = "Produto '" + produto-Input + "' comprado com sucesso!";
}