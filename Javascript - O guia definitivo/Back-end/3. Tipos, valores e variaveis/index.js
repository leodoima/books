// Não se faz uso de tipagem
var name = 'Lucas';
var name = 102030;
console.log(name);


// Uso do objeto Math
var checkValue = 56.23;
console.log(Math.round(checkValue));
console.log(Math.ceil(checkValue));
console.log(Math.floor(checkValue));


// Trabalhando com a precisão de números flutuantes
var x = .3 - .2;
var y = .2 - .1;
console.log(x == y);
console.log(x); // Evidenciando a precisão
console.log(y); // Evidenciando a precisão

/* 
    O exemplo acima é um 'erro' comum em grande parte das linguagens de programação.
    Para evitar problemas semelhantes, recomenda-se mover os valores para antes da vírgula.
*/


// Pulando linhas ao digitar o código utilizando 'escape' (\)
var text = 
"Esta é \
a escrita \
de uma grande linha";

var phase = 'You\'re so beautiful, to me...';

console.log(text);            
console.log(phase);


// Conversão explícita é quando se deixa evidente o tipo de conversão a ser realizada
var number = Number("10");
console.log(number + 10); // Caso não houvesse a conversão o resultado seria: 1010;


var type = false;
var result = String(type);
console.log(result.toString());