//criar uma função para exibir uma lista de alunos
// function listaAlunos(aluno1, aluno2, aluno3, aluno4){
//     console.log("Sejam bem-vindos todos os alunos")
//     console.log(aluno1)
//     console.log(aluno2)
//     console.log(aluno3)
//     console.log(aluno4)
    
// }

//na função não temos como saber de antemão quantos parâmetros seram passados
//ai entra em ação o rest oparator que irá transformar os parãmetros em um array

//vamos reescrever a função utilizando rest operator

//function listaAlunos(alunos){
//    console.log("Sejam bem-vindos todos os alunos");
//    console.log(alunos);
//    console.log(alunos[0]);
//    console.log(alunos[3]);
//}

//listaAlunos('Adamastor', 'Benevides', 'Conegundes', 'Demerval', 'Emengarda');

//outro exemplo: sorteador de numeros primos ,enores que 20 

function sorteadorPrimo(...numeros){
    const numeroSorteado = Math.floor (Math.random()*numeros.length);
    console.log(`posição ${numeroSorteado}`);
    console.log(`Números primo ${numeros[numeroSorteado]}`)
}

sorteadorPrimo(2,3,5,7,11,13,17,19);

//sorteador de alunos da sala

function sorteadorAlunos(...alunos){
    console.log(alunos)
    const alunosSorteados = Math.floor (Math.random()*alunos.length);
    console.log(`posição ${alunosSorteados}`);
    console.log(`alunos: ${alunos[alunosSorteados]}`)
}

sorteadorAlunos('Aline', 'Ana Clara', 'Andre', 'Bernardo', 'Daniel', 'Deivid', 'Enrique', 'Fernanda', 'Gabriel Rossa', 'Gabriel Zattera', 'Heloise', 'Izadora', 'Jefte', 'João Matheus', 'João Mauricío', 'José', 'Julia', 'Kamila', 'Karina', 'Kevin', "Leonardo Freitas", 'Leonardo Speçamilio', 'Lorenzo', 'Lucas', 'Matheus', 'Nicolas', "Nycolas", 'Pedro Portela', 'Rafaela', 'Raphael', 'Rayra', 'Valentina', "Vinicius", 'Vitor Garett', 'Vitor Schuski', "Pedro da Silva", "Ana luiza");
