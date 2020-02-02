/*
    Zadanie:

    Wykorzystująć poznane metody z sekcji Array napisz 2 funkcję, które:

    - pierwsza przyjmie tablicę jako argument i zwróci wynik w postaci:
        "
            1: 1
            2: "dwa"
            3: ttt
        "

        *Hint: string template

    - druga przyjmie argumenty w postaci rozproszonej, tj. (a, b, c), umieści
    je w tablicy i następnie zwróci tablicę.

        fn(a,b,c) => // [a, b, c]

*/

const returnSpecificString = (arr) => {
    // code
};

const returnAsArray = (...args) => {
    // code
};

// TESTS:
console.log(returnSpecificString([1, "dwa", "ttt"]));

function isEqual(arr1, arr2) {
    return !arr2.map((el, index) => el == arr1[index]).includes(false);
}

const check = isEqual(returnAsArray(1, "dwa", "ttt"), [1, "dwa", "ttt"])
    ? "test zaliczny"
    : new EvalError("test nie został zaliczony");

console.log(check);
