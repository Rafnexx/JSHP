/*
    Zadanie:

    Stwórz funkcję, która będzie przyjmowała tablicę jako argument i dokona sortowania
    od najmniejszej do największej:

        - wszystkie elementy tablicy powinny być zamienione na liczbę
        - jeśli tablica jest pusta zwrób error


*/

function sortDecr(arrValue) {
    const len = arrValue.length;

    if (len) {
        const arr = arrValue.map((el) => Number(el));

        for (let i = 1; i < len; i += 1) {
            const current = arr[i];
            let prev = i - 1;

            while (arr[prev] > current) {
                arr[prev + 1] = arr[prev];
                prev -= 1;
            }
            arr[prev + 1] = current;
        }
        return arr;
    }

    throw new EvalError("Pusta tablica");
}


function sortDecr2(arrValue) {
    const len = arrValue.length;

    if (len) {
        let sorted;
        const arr = arrValue.map((el) => Number(el));
        do {
            sorted = false;
            for (let i = 0; i < arr.length; i += 1) {
                if (arr[i] > arr[i + 1]) {
                    const lowerValue = arr[i + 1];
                    arr[i + 1] = arr[i];
                    arr[i] = lowerValue;
                    sorted = true;
                }
            }
        } while (sorted);

        return arr;
    }

    throw new EvalError("Pusta tablica");
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
