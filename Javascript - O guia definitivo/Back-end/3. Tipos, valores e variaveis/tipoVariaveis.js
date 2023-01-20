// Exemplo de como uma variável local se sobrepoe a uma variável global de mesmo nome
var type = "global";

function checkScope(){
    var type = "local";
    return type;
}

console.log(checkScope()); // Result: local


// Exemplo de içamento, onde as variáveis da função se tornam globais dentro delas
function test(){
    var i = 1;

    if(i = 1){
        var j = 1;

        for(var k = 0; k < 10; k++){
            console.log(k);
        }

        console.log(k);
    }

    console.log(k);
    console.log(i);
    console.log(j);
}

test();