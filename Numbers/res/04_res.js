/*
    Napisz funkcję, która będzie przyjmowała argument i sprawdzała, czy dany element:
        - jest liczbą
        - nie jest NaN
        - nie jest -0
*/

function yourTestFunction(NUMBER) {
    //  code here, shoud return boolean value: true or false
    const checkingValue = NUMBER;
    const checkNaN = (checkingValue) => checkingValue !== checkingValue;
    const checkNegZero = (checkingValue) => (
        checkingValue == 0 && 1 / checkingValue == -Infinity ? true : false
    );

    if (typeof checkingValue == "number") {
        if (!checkNaN(NUMBER) && !checkNegZero(NUMBER)) {
            return true;
        }
    }

    return false;
}


console.log(yourTestFunction(2) == true);
console.log(yourTestFunction(3.13) == true);
console.log(yourTestFunction(0) == true);
console.log(yourTestFunction(-0) == false);
console.log(yourTestFunction(NaN) == false);
