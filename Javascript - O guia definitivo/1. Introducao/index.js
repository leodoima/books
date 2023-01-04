// Criando objeto de livro
var book = {
    name: 'Javascript: o guia definitivo',
    author: 'David Flanagan'
}

console.log(`${book.name} - ${book.author}`);


// Adicionando novas propriedades
book.year = 2011;
console.log(`Ano: ${book.year}`);

// Adicionando um objeto interno
book.details = {
    pages: 1062,
    publisher: 'OReilly'
}

console.log(`Páginas: ${book.details.pages}`);
console.log(`Editora: ${book.details.publisher}`);