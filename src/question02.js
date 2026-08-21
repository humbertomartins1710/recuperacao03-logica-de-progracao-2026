import leia from 'readline-sync';

var compras = leia.questionInt("quantas compras")
var valor = 0;
var total = 0;
var melhor = 0;
var media = 0;

while(compras > 0){
   valor = leia.questionInt("qual o valor da venda") 
   compras--
    total = total + valor
    if(valor > 100){
        melhor++
    }
media = total / compras
}
console.log("compras : " + compras)
console.log("total : " + total )
console.log("media : " + media )
console.log("vendas R$ 100 mais : " + melhor)