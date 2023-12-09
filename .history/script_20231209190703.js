const produtos = [
    { nome: "Logitech MX Keys S", preco: 745.00 },
    { nome: "Cadeira Ergonomic, Thunderx3, Yama1", preco: 1350.00 },
    { nome: "Beats Studio 3", preco: 780.00 },
    { nome: "Philips Monitor 49 SuperWide", preco: 7680.00 },
    { nome: "Logitech MX Master 2s", preco: 599.90 },
    { nome: "Xiaomi Mi Computer Monitor Light Bar", preco: 350.00 },
    { nome: "Baseus - Working Station", preco: 1998.90 },
    { nome: "Mouse-Pad Desk Logitech", preco: 154.00 },
    { nome: "Stream-Deck Elgato XL", preco: 4690.00 }
];

let carrinhoItens = {};

function atualizarCarrinho() {
    const listaItensCarrinho = document.getElementById("itens-lista");
    listaItensCarrinho.innerHTML = "";

    for (const nome in carrinhoItens) {
        const item = carrinhoItens[nome];
        const novoItem = document.createElement("li");
        novoItem.innerHTML = `
            ${nome} - Quantidade: ${item.quantidade} - Total: R$${item.precoTotal.toFixed(2)}
            <button onclick="removerDoCarrinho('${nome}', ${item.preco}, ${item.quantidade})">Remover</button>
        `;
        listaItensCarrinho.appendChild(novoItem);
    }

    document.getElementById("preco-total").innerHTML = `Valor Total R$${carrinho.total.toFixed(2)}`;
    updateCarrinho();
}

function adicionarAoCarrinho(nome, preco) {
    if (carrinhoItens[nome]) {
        carrinhoItens[nome].quantidade++;
        carrinhoItens[nome].precoTotal += preco;
    } else {
        carrinhoItens[nome] = {
            quantidade: 1,
            preco: preco,
            precoTotal: preco,
        };
    }

    carrinho.total += preco;

    atualizarCarrinho();
}

function removerDoCarrinho(nome, preco, quantidade) {
    if (carrinhoItens[nome]) {
        if (quantidade > 1) {
            carrinhoItens[nome].quantidade--;
            carrinhoItens[nome].precoTotal -= preco;
        } else {
            delete carrinhoItens[nome];
        }

        carrinho.total -= preco;
    }

    atualizarCarrinho();
}

function limparCarrinho() {
    carrinhoItens = {};
    carrinho.total = 0;
    atualizarCarrinho();
}

function toggleCarrinho() {
    const carrinhoItens = document.getElementById("carrinho-itens");
    if (carrinhoItens.style.display === "none") {
        carrinhoItens.style.display = "block";
    } else {
        carrinhoItens.style.display = "none";
    }
}

// Inicializar os produtos na lista
const listaProdutos = document.getElementById("produtos-lista");

produtos.forEach(produto => {
    const novoItem = document.createElement("div");
    novoItem.classList.add("produto");
    novoItem.innerHTML = `
        <div class="imagem">
            <img src="img/${produto.nome.replace(/\s+/g, '-').toLowerCase()}.jpg" alt="">
        </div>
        <div class="infos">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho('${produto.nome}', ${produto.preco})">Adicionar ao Carrinho</button>
        </div>
    `;
    listaProdutos.appendChild(novoItem);
});