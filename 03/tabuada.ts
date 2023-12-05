/**
 Crie uma função que recebe um array de números como argumentos. A funcão deverá montar uma 
 tabuada de multiplicação para cada número do array passado no argumento da função.
*/

const gerarTabuada = (arrayNumeros:Number[]):void => {
    arrayNumeros.forEach((numero) => {
        for (let vezes = 0; vezes <= 10; vezes++) {         
            console.log(`${numero} x ${vezes} = ${numero * vezes}`);
            if (vezes === 10) {
                console.log('---------------');
            }
        }
    })
};

gerarTabuada([1,2]);