// Construtor (ou factory) function para criar um objeto Item
function Item(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
  
  // Função para adicionar um item ao carrinho
  function adicionarItem(carrinho, item) {
    carrinho.itens.push(item);
  }
  
  // Função para calcular o valor total da compra
  function calcularTotal(carrinho, callback) {
    let total = 0;
  
    for (const item of carrinho.itens) {
      total += item.preco;
    }
  
    if (callback) {
      total = callback(total);
    }
  
    return total;
  }
  
  // Função para aplicar um desconto ao valor total
  function aplicarDesconto(total, desconto) {
    return total * (1 - desconto);
  }
  
  // Exemplo de uso:
  const meuCarrinho = {
    itens: [],
  };
  
  const item1 = new Item('Maçã', 2.0);
  const item2 = new Item('Banana', 1.5);
  
  adicionarItem(meuCarrinho, item1);
  adicionarItem(meuCarrinho, item2);
  
  const totalSemDesconto = calcularTotal(meuCarrinho);
  const totalComDesconto = calcularTotal(meuCarrinho, (total) => aplicarDesconto(total, 0.1));
  
  console.log('Total da compra (sem desconto): R$' + totalSemDesconto);
  console.log('Total da compra (com desconto): R$' + totalComDesconto);
  