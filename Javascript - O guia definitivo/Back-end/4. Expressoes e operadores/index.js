// Expresssão de declaração
var nameUser = "Leonardo";

// Expressão de criação de objeto
var object = new Object();

// Expressão de definição de função
function square(){}

/**
 * Em resumo, praticamente tudo pode ser considerado uma expressão
 */


// Comparadores de igualdade e igualdade rigorosa
var number = 10;
var text = "10";


if(number == text)
    console.log(true); // Apenas este é exibido

if(number === text)
    console.log(true);    


// Identificando a classe de origem
var date = new Date();
console.log(date instanceof Date); 
console.log(date instanceof Number);


// Recurso interpretador de string
eval("var x = 10"); // Criará uma variável
eval("function testEval(){return 123;}"); // Criará uma função
console.log(x);
console.log(testEval());


// Outra forma de analisar o tipo de um objeto
console.log(typeof x);
console.log(typeof nameUser);