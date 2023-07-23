// Ademas de los operadores logicos vistos anteriormente (=, <, >, !) 
// tenemos los operadores and (&&) y or (||), los cuales permiten especificar
// la relación entre operadores logicos
// 
//      var x   |     var y      |    AND   |     OR      |
//  ____________|________________|__________|_____________|
//      TRUE    |      TRUE      |   TRUE   |    TRUE     |
//  ____________|________________|__________|_____________|
//      TRUE    |     FALSE      |  FALSE   |    TRUE     |
//  ____________|________________|__________|_____________|
//     FALSE    |      TRUE      |  FALSE   |    TRUE     |
//  ____________|________________|__________|_____________|
//     FALSE    |     FALSE      |  FALSE   |   FALSE     |
//  ____________|________________|__________|_____________|

console.log(true && true);
console.log(true || true);

console.log(true && false);
console.log(true || false);

console.log(false && true);
console.log(false || true);

console.log(false && false);
console.log(false || false);

console.log(5 > 3 && 6 < 5);
console.log(5 > 3 || 6 < 5);

let text1 = 'hello';
let text2 = 'hello';

console.log(text1 === 'hello');
console.log(text1 === 'hello' && text1 === 'world');
console.log(text1 === 'hello' && text2 === 'world');

console.log(text1 === 'hello' && (text2 === 'world'|| text2 === 'hello'));