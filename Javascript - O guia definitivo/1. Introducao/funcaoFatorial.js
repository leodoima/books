// Função de cálculo fatorial básica
function calculateFactorial(numberCalculate) {
  var resultFactorial = 1;

  while (numberCalculate > 1) {
    resultFactorial *= numberCalculate;

    numberCalculate--;
  }

  return resultFactorial;
}

console.log(calculateFactorial(4));



// Melhorando algoritmo de fatoração através de recursão
function calculateFactorialize(numberCalculate) {
  if (numberCalculate < 0) return -1;
  // Se o número for 0, seu fatorial é 1.
  else if (numberCalculate == 0) return 1;

  return numberCalculate * calculateFactorialize(numberCalculate - 1);
}

console.log(calculateFactorialize(5));



// Otimizando o algoritmo usando lambda
function calculateFactorializeClear(numberCalculate) {
  return numberCalculate < 0
    ? -1
    : numberCalculate == 0
    ? 1
    : numberCalculate * calculateFactorialize(numberCalculate - 1);
}

console.log(calculateFactorializeClear(6));
