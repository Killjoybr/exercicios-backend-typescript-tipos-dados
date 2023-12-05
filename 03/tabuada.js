/**
 Crie uma função que recebe um array de números como argumentos. A funcão deverá montar uma
 tabuada de multiplicação para cada número do array passado no argumento da função.
*/
var gerarTabuada = function (arrayNumeros) {
    arrayNumeros.forEach(function (numero) {
        for (var vezes = 0; vezes <= 10; vezes++) {
            console.log("".concat(numero, " x ").concat(vezes, " = ").concat(numero * vezes));
            if (vezes === 10) {
                console.log('---------------');
            }
        }
    });
};
gerarTabuada([1, 2]);
