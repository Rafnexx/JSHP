/*
    Zadanie:

    Stwórz funkcję, która będzie przyjmowała tablicę jako argument i dokona sortowania
    od najmniejszej do największej:

        - wszystkie elementy tablicy powinny być zamienione na liczbę
        - jeśli tablica jest pusta zwróć error - console.error("Pusta tablica") lub throw new EvalError("Pusta tablica")
*/

function sort_decr(arr) {
    // code
};







const arr_check1 = [1, 2, 0.5, 222, -3, -1000];
const arr_check2 = ["-555", "9", -992, 3, 112];
const arr_check3 = [1.2, -Infinity, 2, 2, -123, 33, -123];
const arr_check4 = ["", "2", 2, 3, [55]];

function compare(arr1, arr2) {
    return !arr1.map((el, i) => el == arr2[i]).includes(false)
}

console.log(compare(sort_decr(arr_check1), arr_check1.sort((a, b) => a - b)))
console.log(compare(sort_decr(arr_check2), arr_check2.sort((a, b) => a - b)))
console.log(compare(sort_decr(arr_check3), arr_check3.sort((a, b) => a - b)))
console.log(compare(sort_decr(arr_check4), arr_check4.sort((a, b) => a - b)))