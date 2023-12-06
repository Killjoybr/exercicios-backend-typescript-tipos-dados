/**
Implemente uma função que receba uma string (um nome qualquer) e seja capaz de soletrar a string informada. O retorno da função será um conjunto de letras separadas por hífens, conforme exemplo abaixo.

Caso o nome informado seja `programador`, a função deve retornar:

p-r-o-g-r-a-m-a-d-o-r

*/

const soletrarPalavra = (palavra: string): string => {
    const palavraArray:string[] = []
    let palavraSoletrada:string = ''

    for (let letra = 0; letra < palavra.length; letra++) {
        if (letra < palavra.length -1) {
            palavraSoletrada = palavraSoletrada + `${palavra[letra]}-`
        } else {
            palavraSoletrada = palavraSoletrada + palavra[letra]
        }
    };
    

    return palavraSoletrada
};

console.log(soletrarPalavra('teste'));
