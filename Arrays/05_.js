/*
    Zadanie:

    Stwórz funkcję, która będzie przyjmowała tablicę jako argument i dokona sortowania
    od najmniejszej do największej:

        - wszystkie elementy tablicy powinny być zamienione na liczbę
       - jeśli tablica jest pusta zwróć error - console.error("Pusta tablica")
         lub throw new EvalError("Pusta tablica")
*/

function sortDecr() {
    // code
}


const arrCheck1 = [1, 2, 0.5, 222, -3, -1000];
const arrCheck2 = ["-555", "9", -992, 3, 112];
const arrCheck3 = [1.2, -Infinity, 2, 2, -123, 33, -123];
const arrCheck4 = ["", "2", 2, 3, [55]];

function compare(arr1, arr2) {
    return !arr1.map((el, i) => el === arr2[i]).includes(false);
}

console.log(compare(sortDecr(arrCheck1), arrCheck1.sort((a, b) => a - b)));
console.log(compare(sortDecr(arrCheck2), arrCheck2.sort((a, b) => a - b)));
console.log(compare(sortDecr(arrCheck3), arrCheck3.sort((a, b) => a - b)));
console.log(compare(sortDecr(arrCheck4), arrCheck4.sort((a, b) => a - b)));
