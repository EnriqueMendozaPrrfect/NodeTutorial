// Los operadores logicos son principalmente utilizados con la finalidad de
// comparar 2 elementos el cual regresa verdadero o falso, existen distintos
// tipos de operadores logicos como:
// ===, el cual se puede leer como 'este valor *es igual* a este otro valor'
// !==, el cual se puede leer como 'este valor *es diferente* a este otro valor'
// >, el cual se puede leer como 'este valor *es mayor* a este otro valor'
// <, el cual se puede leer como 'este valor *es menor* a este otro valor'
// >=, el cual se puede leer como 'este valor *es mayor o igual* a este otro valor'
// <=, el cual se puede leer como 'este valor *es menor o igual* a este otro valor'

// asi tambien se puede negar el valor utilizando
// !, el cual se lee como '*no es* falso|verdadero'

let x = 5;
console.log(5 === x);
console.log(6 === x);

console.log(5 !== x);
console.log(6 !== x);

console.log(5 > x);
console.log(6 > x);

console.log(5 < x);
console.log(4 < x);

console.log(5 >= x);
console.log(6 >= x);

console.log(5 <= x);
console.log(4 <= x);

let y = true;
console.log(!y);

y = false;
console.log(!y);
