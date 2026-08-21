import leia from 'readline-sync';
var soma = 0;
var qtd = 0;
var pares = 0;
var impares = 0;
while(numero !== 0) {
    var numero = leia.questionInt("digite um numero ")
    qtd++
soma = soma + numero;

if(numero % 2 === 0){
pares++
}else {
impares++
}

}
console.log("soma : " + soma)
console.log("numeros : " + qtd)
console.log("pares : " + pares)
console.log("impares : " + impares)
