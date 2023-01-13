// Calcular fatorial utilizando recursividade
function fatorial(valor) {
  return valor <= 1 ? 1 : valor * fatorial(valor - 1);
}

console.log(fatorial(5));

// Chamada de função utilizando menor quantidade de parâmetros
function calcularSoma(x, y) {
  if (x === undefined || y === undefined) {
    throw new Error("Ambos os valores devem ser números válidos");
  }
  return x + y;
}

console.log(calcularSoma(10, 20));

// Trabalhando números parâmetros através de argumentos
function somaItens() {
  var result = 0;

  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}
console.log(somaItens(10, 20, 30, 40));

// Acessando propriedades dos argumentos
function resolveNames(args) {
  console.log(`${args.firstName} ${args.lastName}`);
}

var person = {
  firstName: "Leonardo",
  lastName: "Santos",
};

resolveNames(person);

// Aplicar uso de função anonima
var item = 10;
console.log(item);

(function () {
  item = 0;
})(); // último conjunto de parêntese faz com que a função seja chamada agora

console.log(item);
