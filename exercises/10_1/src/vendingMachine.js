// Imagine que você vai construir uma máquina de venda automática (como essas que vendem refrigerante). A máquina aceita moedas e calcula a diferença do valor total que deve ser pago e o valor recebido da pessoa que compra. Esta máquina possui um conjunto de moedas, você deve implementar a lógica que dado o valor do troco, a máquina retorna uma lista com as moedas que a máquina devolverá para a pessoa.

// Requisitos
// Como uma pessoa que compra em máquinas automáticas eu gostaria de selecionar um item, depositar o pagamento e receber o item e o troco.

// Critérios de aceite
// Uma chamada bem sucedida de uma função getChange deve retornar uma lista com o valor das moedas que serão devolvidas à pessoa
// Esta lista deve estar no formato decrescente de valor
// É permitido a repetição do valor de moedas, por exemplo, [200, 100, 50, 20, 10, 2, 2]
// Um erro com a mensagem paid value is not enough deve ser lançado se o valor pago for menor que o valor da compra
// Moedas disponíveis
// As moedas serão representadas pelos valores 200, 100, 50, 20, 10, 5, 2 e 1. Abaixo existe uma lista de correspondência com os valores em reais (R$)

// 200 (R$2)
// 100 (R$1)
// 50 (R$0,50)
// 20 (R$0,20)
// 10 (R$0,10)
// 5 (R$0,05)
// 2 (R$0,02)
// 1 (R$0,01)
// A quantidade de cada moeda é infinita, imagine que isso é uma simplificação do problema.

// Exemplo
// Se uma pessoa comprar items com valor total igual a R$2,15 (ou seja 215) e pagar R$3 (ou seja 300). O valor do troco é R$0,85 (ou seja 85). Para entregar esse troco à pessoa, deve-se retornar as moedas 1x R$0,50, 1x R$0,20, 1x R$0,10 e 1x R$0,05, formando assim a lista [50, 20, 10, 5].

// Finalize a implementação da função getChange(payable, paid).

// payable é o valor a ser pago, ou o valor total
// paid é o valor que a pessoa pagou

function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  const remaining = paid - payable;

  // escreva seu código aqui...

  return change;
}

module.exports = { getChange };
