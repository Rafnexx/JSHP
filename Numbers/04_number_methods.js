/*
    Napisz funkcję, która będzie przyjmowała argument i sprawdzała, czy dany element:
        - jest liczbą
        - nie jest NaN
        - nie jest -0
*/


function your_test_function(NUMBER) {
    //  code here, shoud return boolean value: true or false
}


console.log(your_test_function(2) == true)
console.log(your_test_function(3.13) == true)
console.log(your_test_function({}) == true)
console.log(your_test_function([]) == true)
console.log(your_test_function(0) == true)
console.log(your_test_function(-0) == true)
console.log(your_test_function(NaN) == true)