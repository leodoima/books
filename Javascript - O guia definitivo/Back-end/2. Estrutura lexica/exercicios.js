// Criar função para comparar conteúdo de arrays
function compareArrays(listObjective, listRealized) {
  if (listObjective.length != listRealized.length) {
    return false;
  }

  for (var i = 0; i < listObjective.length; i++) {
    var itemExists = false;

    for (var j = 0; j <= listRealized.length; j++) {
      if (listObjective[i] === listRealized[j]) {
        itemExists = true;
        debugger;
        break;
      }
    }

    if (itemExists === false) {
      return false;
    }
  }

  return true;
}

var listItemObjective = [1, 3, 2];
var listItemRealized = [2, 1, 3];

var listCursesObjetive = ["Java Básico", "Java OO", "Java Spring"];
var listCursesRealized = ["Java OO", "Java Básico"];

console.log(compareArrays(listItemObjective, listItemRealized));
console.log(compareArrays(listCursesObjetive, listCursesRealized));
