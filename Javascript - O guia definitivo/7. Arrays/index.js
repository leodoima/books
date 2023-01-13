// Array esparso (contendo lacunas)
var integrantesBanda = ['Leonardo', , , , 'Lucas'];


// Array com tamanho definido
var diasSemana = new Array(10);


// Avaliando a existência de valores em todos os espaços do array
var numbers = [10, 20, , 40, 50];

for(number in numbers){
    if(!numbers[number]){
        continue;
    }

    console.log(numbers[number]);
}

// Acrescentando e removendo itens
var sequencial = [1, 2, 3, 4, 5, 6, 7];
delete sequencial[3]; // removendo valores
console.log(sequencial.toString());

sequencial.push(8, 9); // acrescentando ao final
console.log(sequencial.toString());

sequencial.pop(); // removendo último item
console.log(sequencial.toString());


// Percorrendo array com forEach
sequencial.forEach(element => {
    console.log(sequencial[--element]);
});


// Ordenando arrays
var codigosEntrada = [288, 195, 664, 184, 301];
console.log(codigosEntrada.sort()); // alfabetica 
console.log(codigosEntrada.reverse()); // decrescente


// Aplicar uso de Map() - cada elemento é trabalhado e o array original não é alterado
var numerosDiversos = [10, 20, 30, 40, 50];
var numerosDobrados = numerosDiversos.map(number => { return number * 2 });
console.log(numerosDobrados.toString());


// Aplicar uso de Filter()
var numerosVariados = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var numerosDivisiveis = numerosVariados.filter(number => {return number % 2 == 0});
console.log(numerosDivisiveis.toString());