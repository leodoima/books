class Book {
  constructor(name, author, numberOfPages) {
    this.name = name;
    this.author = author;
    this.numberOfPages = numberOfPages;
  }

  out() {
    console.log(
      `Livro: ${this.name} . Autor: ${this.author}. Páginas: ${this.numberOfPages}`
    );
  }
}

var book = new Book("Javascript: o guia definitivo", "David Flanagan", 1060);
book.out();

// Criar exemplo utilizando herança de classes
class Person {
  #name; // private

  constructor(name) {
    this.#name = name;
  }

  out() {
    console.log("Name of person is: " + this.#name);
  }

  get getName() {
    return this.#name;
  }

  set setName(name) {
    this.#name = name;
  }
}

class User extends Person {
  #userName; // private
  static #numberUsers = 0;

  constructor(name, userName) {
    super(name);
    this.#userName = userName;

    User.#numberUsers++;
  }

  // Sobrescrita de método
  out() {
    console.log(`Name: ${super.getName} - User: ${this.#userName}`);
  }

  get getUserName() {
    return this.#userName;
  }

  set setUserName(userName) {
    this.#userName = userName;
  }

  static numberUsers() {
    return User.#numberUsers;
  }
}

var user = new User("Leo", "leo");
user.out();

user.setName = "Leonardo";
user.setUserName = "leodoima";

console.log(user.getName); // Leonardo
console.log(user.getUserName); // leodoima

console.log(User.numberUsers()); // 1
