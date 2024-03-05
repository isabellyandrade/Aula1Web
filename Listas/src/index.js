"use strict";
//Exercicio 1
function maiorNum(n, int) {
    for (let i = 0; i < n.length; i++) {
        if (n[i] > int)
            int = n[i];
    }
    return int;
}
let int;
console.log("1)");
console.log("O maior numero da lista eh: ", maiorNum([9, 15, 26, 4, 90, 44], 0));
//Exercicio 2
function parImpar(n) {
    if (n % 2 == 0) {
        return console.log("O numero eh par");
    }
    else {
        return console.log("O numero eh impar");
    }
}
let n;
console.log("\n2)");
console.log(parImpar(67));
//Exercicio 3
function mediaArit(n) {
    let i;
    let soma = 0;
    let media;
    for (i = 0; i < n.length; i++) {
        soma += n[i];
    }
    media = soma / n.length;
    return media;
}
console.log("\n3)");
console.log("A media eh: ", mediaArit([5, 9, 8, 6]));
//Exercicio 4
function LetMaiuscula(letra) {
    return letra.toUpperCase();
}
console.log("\n4)");
console.log(LetMaiuscula("hello word!"));
console.log(LetMaiuscula("letra maiuscula"));
//Exercicio 5
function NumPrimo(num) {
    let i;
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
console.log("\n5)");
console.log(NumPrimo(7));
console.log(NumPrimo(14));
//Exercicio 6
function InvertOrdem(n) {
    return n.reverse();
}
console.log("\n6)");
console.log(InvertOrdem([5, 4, 3, 2, 1]));
//Exercicio 7
function Aumento(valor, porcentagem) {
    let juros;
    let novo_valor;
    juros = valor * porcentagem;
    novo_valor = valor + juros;
    return novo_valor;
}
console.log("\n7)");
console.log(Aumento(100, 0.50));
//Exercicio 8
function OrdemReversa(string) {
    let array = string.split("");
    let reverse = array.reverse().join("");
    return reverse;
}
console.log("\n8)");
console.log(OrdemReversa("Isabelly"));
//Exercicio 9
function SomaPar(int) {
    let soma = 0;
    let i;
    for (i = 0; i < int.length; i++) {
        if (int[i] % 2 == 0) {
            soma += int[i];
        }
    }
    return soma;
}
console.log("\n9)");
console.log(SomaPar([1, 2, 3, 4, 5, 6]));
