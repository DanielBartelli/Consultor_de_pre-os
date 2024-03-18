var carrinho = [];

    if (localStorage.getItem('carrinho')) {
        carrinho = JSON.parse(localStorage.getItem('carrinho'));
        atualizarNumProdutos();
        atualizarValorTotal();
    }

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

       
        atualizarNumProdutos();
        atualizarValorTotal();

        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }

    function atualizarNumProdutos() {
        document.getElementById('numProdutos').innerText = carrinho.length;
    }

    function atualizarValorTotal() {
        var soma = 0;
        
        for (var i = 0; i < carrinho.length; i++) {
            soma += carrinho[i].preco;
        }
        
        document.getElementById('valorTotal').innerText = "R$ " + soma.toFixed(2);
    }