/*

    Zadanie:

        zapisz funkcje w postaci 'arrow function'

*/



function add(x, y) {
    return x + y;
}

function createNewArray(arr) {
    let double_result = [];

    double_result = arr.filter(function findMatch(element) {
        return element > 3;
    })

    console.log(double_result);
    return double_resutl;
}

function bindTwoArrays(arr1, arr2) {
    if(arr2) {
        return arr1.concat(arr2)
    } else {
        return arr1.concat([0, 0, 0])
    }
}
