# Curso-de-javascript

let pode redefinir o valor da variavel
const NÃO pode redefinir o valor da variavel
Usar mais o const como boa pratica, e so utilizar o let quando realmente for necessario 


PARA NOMEAR UMA FUNÇÃO SE UTILIZA: Verbo + substantivo.
exemplo: resetaCor, transformarObjeto,  alterarTamanho.

// let idade = 10
// console.log(idade);
// let altura = 165
// console.log(altura);




//  let infoPessoa = {
//     nome: 'Jorge',
//     idade: 29,
//     estaAprovado: true,
//     sobrenome: 'Ribeiro'
//  };

//  console.log(infoPessoa)




// let familia = [26, 45, 50, 17]
// console.log(familia.length)
// console.log(familia[1]);




// let nomeDoColega = ['Cauã', 17, 'Ibirite',]
// console.log(nomeDoColega);




// let corSite = "azul";
// function resetaCor(cor, tonalidade){
//     corSite = cor + ' ' + tonalidade;
// };

// console.log(corSite)
// resetaCor("Vermelho", "Sangue")
// console.log(corSite);




// let componenteComputador = "mouse";
// function integraMarca(teclado, mouse){
//     componenteComputador = teclado + ' e ' + mouse;
// };

// console.log(componenteComputador);
// integraMarca("Teclado Riotero", "Mouse Ryzer");
// console.log(componenteComputador);




// let pontos = 40;
// let tipo = pontos >= 50 ? 'premium' : 'comum';

// console.log(tipo)




// let permissao;
// permissao = 'diretor';
// switch (permissao){
//     case 'comum':
//         console.log('Usuário comum')
//         break;

//     case 'gerente':
//         console.log('usuário gerente');
//         break;

//     case 'diretor':
//         console.log('usuário diretor');
//         break;

//     default:
//         console.log('Usuário não identificado.')
// }




let i = 5;
while (i >= 1){

}

for (let k = 1; k <=10; k++){

}

do {
    console.log('Digitando');
    i++
} while ( i < 10)




const pessoa = {
    nome: 'jhonatan',
    idade: 25
};
for(let chave in pessoa){
    console.log(chave, pessoa['nome']);
}



const cores = ['Vermelho', 'Azul', 'verde'];

for( let indice in cores){
    console.log(indice,cores[indice])
}

for(let cor of cores){
    console.log(cor);
}