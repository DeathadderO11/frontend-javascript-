//String

const nome = "Pedro";
const sobrenome = "Silva";
const idade = 27;

//Concatenação
const apresentacao = " Meu nome é " + nome + " " + sobrenome + " e eu tenho " + idade + " anos. ";
idade + " anos. ";

//Templade de string
const apresentcao2 = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos `;

/*console.log(apresentacao2);

const s = "Olá mundo";

console.log(s.length);

console.log(s.toUpperCase());

console.log(s.toLowerCase());*/

const s = "Olá mundo";

console.log(s.substring(0, 5));

console.log(s.split("u"));
