//  Sprawdzamy, czy:
//      1. dwa elementy są takiego samego typu
//      2. 0 i NaN powinno zwrócić false, pozbywamy się NaN z liczb
//
//      Hint: NaN i NaN to liczby
//      Hint2: dwa obiekty nie są takie same nigdy, trzeba sprawdzić inaczej
//             typeof {} === typeof {}, w przypadku sprawdzania typeof 0 i typeof NaN
//             otrzymamy true

if (Object.is) {
    Object.is = function test_function() {
        // code
    }
}






// Tests
let ob1 = {}
let ob2 = {}

console.log(Object.is(ob1, ob2) === true);
console.log(Object.is(2, 2) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(false, false) === true);
console.log(Object.is("test", "test") === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);

console.log(Object.is(undefined, "undefined") === false);
console.log(Object.is(2, "2") === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(ob1, NaN) === false);