//Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista". 
//Peça novamente para o usuário digitar o nome de uma fruta para ser removida. 
//Sempre que o usuário procurar por uma que não está no array exiba a mensagem "Fruta indisponível no nosso mercado". 
//Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada".

function ListaCompras() {
    let lista = ["maça", "banana", "melancia", "manga", "morango"];
    let carrinho = [];

    function mostrarLista() {
        return "Lista de frutas disponíveis: \n" + lista.join(", ") + "\n\n" +
               "Carrinho de compras: \n" + carrinho.join(", ");
    }

    while (lista.length > 0) {
        const fruta = prompt(mostrarLista() + "\nDigite a fruta que deseja:");

        const estaFruta = lista.indexOf(fruta);
        if (estaFruta !== -1) {
            carrinho.push(fruta);
            alert(`${fruta} adicionada ao seu carrinho`);
            lista.splice(estaFruta, 1);
        } 
        else {
            alert("Fruta indisponível no momento");
        }
    }

    alert("Lista de compras finalizada.\nItens no carrinho: " + carrinho.join(", "));
}