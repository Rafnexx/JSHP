/*
    Napisz funkcję, która będzie przyjmowała argument i sprawdzała, czy dany element:
        - jest liczbą
        - nie jest NaN
        - nie jest -0
*/


function yourTestFunction(NUMBER) {
    //  code here, shoud return boolean value: true or false
}


console.log(yourTestFunction(2) == true);
console.log(yourTestFunction(3.13) == true);
console.log(yourTestFunction({}) == false);
console.log(yourTestFunction([]) == false);
console.log(yourTestFunction(0) == true);
console.log(yourTestFunction(-0) == false);
console.log(yourTestFunction(NaN) == false);
