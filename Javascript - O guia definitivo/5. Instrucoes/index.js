// Condição vazia utilizando for
for(i = 0; i < 10; i++); // Realizará o incremento até 9, mesmo sem corpo
console.log(i);


// Exemplo de condição vazia com if
var nameUser = 'leonardo';
if(nameUser === 'leonardo.santos');
	console.log('Usuário já existente'); // Sempre executará


// Variáveis declaradas sem conteúdo por padrão são undefined    
var hostName;
if(hostName == undefined){
    console.log(true);
}


// Exemplo de uso do continue dentro de um laço
for(i = 0; i <= 10; i++){
    if(i != 10){
        continue;
    }
    
    console.log('O valor de i é: ' + i);
}


// Tratamento de exceções
try {
    var n;
    factorial(n);

}catch(ex){
    console.log('Erro na realização de cálculo: ' + ex);
}


// Utilizando debugger para causar uma parada na execução do código
function favor(aux){
    if(aux === undefined){
        debugger;
    }
}

favor();