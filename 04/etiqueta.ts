/**
Uma linha de produção de computadores precisa implementar uma nova funcionalidade, ao sistema de gestão usado em sua fábrica, para geração automática de etiquetas dos produtos. Implemente uma função que receba um objeto, conforme exemplo abaixo, como argumento e retorne uma lista com todas as informações das etiquetas geradas.


{
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}


O resultado para o exemplo acima será:


;[
    "321-2022-001",
    "321-2022-002",
    "321-2022-003",
    "321-2022-004",
    "321-2022-005",
]
 
*/

const gerarEtiqueta = (produto: {
	produto: string;
	lote: number;
	ano: number;
	qtd: number;
}): String[] => {
	const etiqueta: String[] = [];
	for (let contador = 1; contador <= produto.qtd; contador++) {
		etiqueta.push(`${produto.lote}-${produto.ano}-00${contador}`);
	}
	return etiqueta;
};

console.log(
	gerarEtiqueta({
		produto: 'CPU Dual Core 3.0GHZ',
		lote: 321,
		ano: 2022,
		qtd: 5
	})
);
