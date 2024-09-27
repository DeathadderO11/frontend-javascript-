//Classe ES6

class Pessoa {
    // Construtor da classe Pessoa
    constructor(nome, sobrenome, dataDenascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataDenascimento = new Date(dataDenascimento);
    }

    // Método para obter o nome completo
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

// Criando uma instância da classe Pessoa
class Cliente extends Pessoa {
    // Construtor da classe Cliente
    constructor(nome, sobrenome, dataDenascimento, saldo) {
        super(nome, sobrenome, dataDenascimento);
        this.saldo = saldo;
    }
}

// Criando uma instância da classe Cliente

const cliente1 = new Cliente("Pedro", "Souza", "1-1-90", 1000);
console.log(cliente1);//Exibe o objeto cliente1
console.log(cliente1.nome);//Exibe o nome de cliente1
console.log(cliente1.sobrenome);//Exibe o sobrenome de cliente1
console.log(cliente1.dataDenascimento);// Exibe a data de nascimento de cliente1
console.log(cliente1.saldo);//Exibe o saldo de cliente1
