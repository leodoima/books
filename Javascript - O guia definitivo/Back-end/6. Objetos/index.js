// Criando objetos com construtora (termo new)
var o = new Object();
var a = new Array();
var d = new Date();


// Validando acesso à propriedades
var book = {
	author: 'Dan Brown'
}

console.log(book.name); // gera erro, pois 'name' não existe

// acrescentando validação
if(book.name){
	console.log(book.name);
}


// Removendo propriedades
delete book.author;

if(!book.author){
	console.log('Propriedade não existe'); // true
}