import leia from 'readline-sync';

var numeroInicial = leia.questionFloat("digite o numero inicial ")
var numeroFinal = leia.questionFloat("digite o numero final ")
var soma =0;
var pares = 0;
var impares = 0;
while(numeroInicial < numeroFinal){
    numeroInicial++
    soma = numeroFinal + numeroInicial;
    if (numeroInicial % 2 === 0){
pares++
    }else{
        impares++
    }
    
}
console.log("numero final : " + numeroFinal)
console.log("pares :" + pares)
console.log("impares :" + impares)