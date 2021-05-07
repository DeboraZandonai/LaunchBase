const nome = "Debora";
console.log(nome);

// 1 - criar um programa que calcula média das notas entre alunos e envia mensagem do cálculo.

const nome1 = "Debora";
const nome2 = "Diego";
const nome3 = `Valeska e ${nome}`; // ---> tamplate string

console.log(nome3);

const aluno1 = "Mayk";
const notaAluno1 = 9.8;

const aluno2 = "Debora";
const notaAluno2 = 10;

const alunno3 = "Fulano";
const notaAluno3 = 2;

const media = (notaAluno1 + notaAluno2 + notaAluno3) / 3;

// Se a média for maior que 5, parabenizar a turma

if (media > 5) {
  console.log(`A nota foi de ${media}. Parabéns`); // faz alguma coisa
} else {
  console.log(`A média e menor que 5`); // faz outra coisa
}
// console.log(media)

// console.log(typeof aluno1) // typeof = que tipo de variável(string, number)

/* =========================================================================================
                         OPERADORES DE COMPARAÇÃO

    >     Maior
    <     Menor
    >=    Maior igual a 
    <=    Menor igual a 
    ==    Igual a                         
    ===   Igual e do mesmo tipo
    !=    Diferente de 
    !==   Diferente, inclusive do tipo 

========================================================================================== */

console.log(5 > 4); // true
console.log(5 < 4); // false
console.log(5 == 4); // false
console.log(4 == "4"); // true
console.log(4 === "4"); // false

// DESAFIO 1
const idade = 17;

// verificar se a pessoa é maior de 18
console.log(idade >= 18); // true

// se sim, deixar entrar, se nao, bloquear a entrada
if (idade >= 18) {
  console.log("Deixar entrar");
} else {
  console.log("Bloquear a entrada");
}

// se a pessoa tiver 17 anos, avisar para avisar quando completado 18
if (idade === 17) {
  console.log("Volte quando tiver de 18");
}

/* ================================================================================================
                         OPERADORES LÓGICOS

        &&  "E"   As duas condições devem ser verdadeiras para que a condição final seja verdadeira.

        ||  "OU"  Uma das condições devem ser verdadeira, para que a condição final seja  verdadeira.

        !   "NÃO"  Nega uma condição.

================================================================================================== */

console.log(5 == 5 && 6 == 6); // true
console.log(5 == 5 && 6 == 7); // false
console.log(5 == 5 && 6 != 6); // false

console.log(5 != 5 || 6 == 6); //true
console.log(5 == 5 || 6 != 6); //true

console.log(!(5 > 6)); // true
console.log(!(5 < 6)); // false

// DESAFIO 2

const idade1 = 17;

// verificar se a pessoa é maior de 18
// se sim, deixar entrar, se não, bloquear a entrada
// se a pessoa tiver 17 anos, avisar para avisar quando completado 18
if (!(idade1 >= 18) || idade1 === 17) {
  console.log("Bloquear a entrada");
} else {
  console.log("Deixar entrar");
}

/* ================================================================================================
                         OPERADORES ARITMÉTICOS

        *   Multiplicação
        /   Divisão
        %   Resto da divisão
        +   Adição
        -   Subtração

================================================================================================== */

console.log(2 * 2); // 4
console.log(2 / 2); // 1
console.log(2 % 1.5); // 0.5
console.log(2 % 2); // 4
console.log(2 - 2); // 0

/*==================================================================================================
                         OBJETO = coleção de propriedades que recebem valores ou funcionalidades  */
const alunoA = {
  nome: "Debora",
  nota: 9.8,
};

const alunoB = {
  nome: "Ana",
  nota: 8,
};

const mediaO = (alunoA.nota + alunoB.nota) / 2;

// todos em uma variável = ARRAY = vetores

const alunos = [
  {
    nome: "Debora",
    nota: 9.8,
  },
  {
    nome: "Ana",
    nota: 8,
  },
];

const mediaB = (alunos[0].nota + alunos[1].nota) / 2;

console.log(alunos);

/*==================================================================================================
                         FUNCTION                                                                  */

function calculaMedia(alunos) {
  return (alunos[0].nota + alunos[1].nota) / 2;
}

const mediaF1 = calculaMedia(alunos);
const mediaF2 = calculaMedia(alunos);

// estrutura de repetição

/*function calculaMedia(alunos) {
    for (let i = 0; i < alunos.length; i++) {
        console.log(i);
    }
}*/

function calculaMedia(alunos) {
  let soma = 0;
  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota;
  }
  const media = soma / alunos.length;
  console.log(media);
  return media;
}

// BOOLEAN = true or false

// marcar aluno como aprovado se a nota for menor que 5, e, enviar mensagem

function marcarComoReprovado(alunos) {
  for (let aluno of alunos) {
    aluno.reprovado = false;
    if (aluno.nota < 5) {
      aluno.reprovado = true;
    }
  }
  console.table(alunos);
}

marcarComoReprovado(alunos);

function enviarMensagemReprovado(aluno) {
  if (aluno.reprovado) {
    console.log(`O aluno ${aluno.nome} esta reprovado`);
  }
}

function alunoReprovado(alunos) {
  for (let aluno of alunos) {
    marcarComoReprovado(aluno);
    enviarMensagemReprovado(aluno);
  }
}

alunoReprovado(alunos);

// EMBED = pega link do youtube

const h1selecionado = document.querySelector("h1");
const h1classes = h1selecionado.classList;

function callbackH1() {
  console.log("Clicou em", h1selecionado.innerText);
}

h1selecionado.addEventListener("click", callbackH1);

const hrefPagina = window.location.href;
console.log(hrefPagina);

const elementoAtivo = document.querySelector(".ativo");

const linguagem = window.navigator.language;
console.log(linguagem);

if ((linguagem = "EN-us")) {
  // mudar a linguagem conforme estiver no browser
}

const windowWidth = window.innerWidth;
