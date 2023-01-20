// Trata-se do conceito onde os objetos não sofrem mutação
var nameUser = "Leonardo dos Santos";
console.log(nameUser.toUpperCase()); // Altera, porém, não atribui 
console.log(nameUser); // Mesmo conteúdo original

nameUser = nameUser.toUpperCase(); // Forçando atribuição de mudança do conteúdo
console.log(nameUser);


// Wrapper é o fato onde variáveis instanciam métodos, como o caso abaixo:
nameUser.toUpperCase(); // Neste caso uma variável tem comportamento de um objeto