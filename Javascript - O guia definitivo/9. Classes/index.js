// Demonstrar tipagem de uma classe
class Person {}
console.log(typeof Person); // retorna function e não class


// Trabalhar conceito de hoinsted (acionar função ainda não declarada)
console.log(hello());
function hello(){
    return 'This is a hoinsted recurse';
}

// var student = new Student(); // gera erro porque as classes não são hoinsted, apesar serem functions
class Student{}