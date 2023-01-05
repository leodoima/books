// Trata-se do conceito onde os objetos não sofrem mutação
var nameUser = "Leonardo dos Santos";
console.log(nameUser.toUpperCase()); // Altera, porém, não atribui 
console.log(nameUser); // Mesmo conteúdo original

nameUser = nameUser.toUpperCase(); // Forçando atribuição de mudança do conteúdo
console.log(nameUser);