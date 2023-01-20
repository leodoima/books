// Exemplo de quando não existiam classes na linguagem
const Book = function (name, author, numberOfPages) {
  this.name = name;
  this.author = author;
  this.numberOfPages = numberOfPages;
};

var fundacao = new Book("Fundação", "Asimov", "288");
console.log(fundacao.name);

/**
 * Aplicar exemplo de herança nas versões ES5
 */
function Person() {} // cria classe mãe

Person.prototype.info = function () {
  // define um método para a classe
  console.log("This is a method of Person");
};

function User() {} // cria uma classe filha
User.prototype = Person.prototype; // define a herança de propriedades de Person para User

var userLeonardo = new User();
userLeonardo.info(); // exibe mensagem esperada
