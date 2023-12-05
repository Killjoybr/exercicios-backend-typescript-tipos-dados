var usuarios = [
    {
        nome: 'João',
        pets: ['Max']
    },
    {
        nome: 'Ana',
        pets: ['Pingo', 'Lulu']
    },
    {
        nome: 'Beatriz',
        pets: ['Lessie']
    },
    {
        nome: 'Carlos',
        pets: ['Farofa', 'Salsicha', 'Batata']
    },
    {
        nome: 'Antonio',
        pets: ['Naninha']
    }
];
var buscarDonoPet = function (lista, nomePet) {
    var usuarioEncontrado;
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var usuario = lista_1[_i];
        if (usuario.pets.includes(nomePet)) {
            usuarioEncontrado = usuario;
        }
    }
    if (usuarioEncontrado) {
        console.log("O dono(a) do(a) ".concat(nomePet, " \u00E9 o(a) ").concat(usuarioEncontrado.nome));
    }
    else {
        console.log("Que pena ".concat(nomePet, ", n\u00E3o encontramos seu dono(a)"));
    }
};
buscarDonoPet(usuarios, 'Guido');
