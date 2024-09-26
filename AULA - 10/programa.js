// JS - POO

const pessoaA = {
    nome: "Pedro",
    sobrenome: "Silva",
    dataDeNascimento: new Date("1990-01-02"),
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    },
    obterAnoNascimento() {
        return this.dataDeNascimento.getFullYear();
    }
};

const pessoaB = {
    nome: "Luiz",
    sobrenome: "Souza",
    dataDeNascimento: new Date("1999-01-01"),
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    },
    obterAnoNascimento() {
        return this.dataDeNascimento.getFullYear();
    }
};

console.log(pessoaA.nome);
console.log(pessoaA.sobrenome);
console.log(pessoaA.obterNomeCompleto());
console.log(pessoaA.obterAnoNascimento());

console.log(pessoaB.nome);
console.log(pessoaB.sobrenome);
console.log(pessoaB.obterNomeCompleto());
console.log(pessoaB.obterAnoNascimento());

// Função construtora
function Pessoa(nome, sobrenome, dataDeNascimento) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dataDeNascimento = new Date(dataDeNascimento);
    this.amigos = [];
    
    this.adicionarAmigo = function(amigo) {
        if (!this.amigos.includes(amigo)) {
            this.amigos.push(amigo);
            amigo.amigos.push(this);
        }
    };
    
    this.selecionarAmigos = function() {
        return this.amigos.map(function(amigo) {
            return amigo.obterNomeCompleto();
        });
    };
    
}

Pessoa.prototype.obterNomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
};

const pessoa1 = new Pessoa("João", "Silva", "1989-08-07");
const pessoa2 = new Pessoa("Maria", "Santos", "1990-02-08");

console.log(pessoa1);
console.log(pessoa2);

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.obterNomeCompleto());
pessoa1.adicionarAmigo(pessoa2);

console.log(pessoa1.amigos);
console.log(pessoa2.amigos);
