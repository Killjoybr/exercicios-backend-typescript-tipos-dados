/*
    Implemente uma função que seja capaz de filtrar usuários pelo nome em uma lista de resultados.

    A função receberá a lista de usuários e o nome a ser encontrado na lista.

    O retorno da função será um array com os resultados da busca ou um array vazio caso nenhum usuário seja encontrado.
*/
var filtrarNomes = function (lista, nome) {
    var resultados = [];
    lista.forEach(function (usuario) {
        if (usuario.nome.includes(nome)) {
            resultados.push({
                nome: usuario.nome,
                idade: usuario.idade,
                status: usuario.status
            });
        }
    });
    return resultados;
};
var usuarios = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
];
console.log(filtrarNomes(usuarios, 'o'));
