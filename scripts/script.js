var carrinho = [];


function consultarPreco() {
    var produtoInput = document.getElementById('produtoInput').value;
    
    var preco = Math.random() * (100 - 1) + 1; 
    document.getElementById('resultado').innerText = "Preço do produto '" + produtoInput + "': R$ " + preco.toFixed(2);
}


function comprarProduto() {

    var produtoInput = document.getElementById('produtoInput').value;
    var preco = Math.random() * (100 - 1) + 1;
    var produto = { nome: produtoInput, preco: preco };

    carrinho.push(produto);
    document.getElementById('resultado').innerText = "Produto '" + produtoInput + "' adicionado ao carrinho!";
    console.log("Carrinho:", carrinho);
}


function calcularTotal() {

    var soma = 0;
    
    for (var i = 0; i < carrinho.length; i++) {
        soma += carrinho[i].preco;
    }
    
    var resultado = soma > 0 ? "Total do Carrinho: R$ " + soma.toFixed(2) : "Carrinho vazio";
    document.getElementById('resultado').innerText = resultado;
}