"use strict";
//1
function maiorNum(n, int) {
    for (let i = 0; i < n.length; i++) {
        if (n[i] > int)
            int = n[i];
    }
    return int;
}
let int;
console.log("O maior numero da lista eh: ", maiorNum([9, 15, 26, 4, 90, 44], 0));
//2
function parImpar(n) {
    if (n % 2 == 0) {
        return console.log("O numero eh par");
    }
    else {
        return console.log("O numero eh impar");
    }
}
let n;
console.log(parImpar(67));
//3
function mediaArit(n, soma, media) {
    for (let i = 0; i < n.length; i++) {
        soma + n[i];
        media = soma / n[i];
    }
}
