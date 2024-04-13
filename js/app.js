function addProducts() {
    let product = document.getElementById("produto").value;
    const quantity = document.getElementById("quantidade").value;

    product = product.split("-");
    const item = product[0].trim();
    const value = product[1].replace(/R\$/g, "").trim();

    if ( !quantity || quantity == "0"  ) {
        alert("Infome a quantidade")
        return;
    }

    sum(value, quantity);
    addCart( item, value, quantity);

}

function sum( value,  quantity) {
    const amountElement = document.getElementById("valor-total");
    const amount = amountElement.innerText.replace(/R\$/g, "").trim();
    amountElement.innerText = `R$${parseInt(amount) + (parseInt(value) * parseInt(quantity))}`;
}

function addCart( item, value, quantity ) {
    const listItens = document.getElementById("lista-produtos")

    listItens.innerHTML += `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantity}x</span> ${item} <span class="texto-azul">R$${value}</span>
        </section>
    `;
}

function cleanProducts() {
    const listItens = document.querySelectorAll('section[id="lista-produtos"] > section');
    document.getElementById("valor-total").innerText = 'R$0';
    document.getElementById("quantidade").value = "";
    listItens.forEach(element => {
        element.remove();
    });
}