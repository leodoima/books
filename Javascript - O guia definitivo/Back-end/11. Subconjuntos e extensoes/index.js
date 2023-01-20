// Exemplo de declaração de variáveis
var x;
let y;

// Demonstrar como let se comporta em blocos de código
let number = 1;

for (let i = 1; i < 10; i++) {
  let number = i; // variável local
}

console.log(number); // 1 - diferentemente se fosse usado var

// Aplicação simples de desestruturação
let [nome, sobrenome] = ["Leonardo", "Santos"];
console.log(`${nome} ${sobrenome}`);

// Aplicação parcial e completa da desestruturação
let first, second, all;
all = [first, second] = [1, 2, 3, 4];
console.log(first); // 1
console.log(second); // 2
console.log(all); // [1, 2, 3, 4]

function valorAleatorio() {
  let x = Math.random();
  let y = Math.random();

  return [x, y];
}

let [a, b] = valorAleatorio();
console.log(`A: ${a} - B: ${b}`);
