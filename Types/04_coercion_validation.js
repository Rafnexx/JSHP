function nameValidation(name) {
    /*
        - parametr musi być stringiem
        - nie może to być pusty cudzysłów ""
        - nie może zawierać białych znaków (spacje, tab...)
        - musi posiadać min 3 znaki (length > 2)

    */
}

function attComaprison(att, len) {
    /*
        - parametry mogą być typu string albo number
        - oba parametry powinny być traktowane jako number
        - obie liczby powinny być większe lub równe 0
        - obie liczby muszą być liczbami całkowitymi
        - att musi być mniejsze lub równe len

    */
}



// tests:
console.log(nameValidation("Frank") === true);
console.log(attComaprison(6, 10) === true);
console.log(attComaprison(6, "10") === true);
console.log(attComaprison("6", 10) === true);
console.log(attComaprison("6", "10") === true);

console.log(nameValidation(false) === false);
console.log(nameValidation(null) === false);
console.log(nameValidation(undefined) === false);
console.log(nameValidation("") === false);
console.log(nameValidation("  \t\n") === false);
console.log(nameValidation("X") === false);
console.log(attComaprison("", 6) === false);
console.log(attComaprison(6, "") === false);
console.log(attComaprison("", "") === false);
console.log(attComaprison("foo", 6) === false);
console.log(attComaprison(6, "foo") === false);
console.log(attComaprison("foo", "bar") === false);
console.log(attComaprison(null, null) === false);
console.log(attComaprison(null, undefined) === false);
console.log(attComaprison(undefined, null) === false);
console.log(attComaprison(undefined, undefined) === false);
console.log(attComaprison(false, false) === false);
console.log(attComaprison(false, true) === false);
console.log(attComaprison(true, false) === false);
console.log(attComaprison(true, true) === false);
console.log(attComaprison(10, 6) === false);
console.log(attComaprison(10, "6") === false);
console.log(attComaprison("10", 6) === false);
console.log(attComaprison("10", "6") === false);
console.log(attComaprison(6, 10.1) === false);
console.log(attComaprison(6.1, 10) === false);
console.log(attComaprison(6, "10.1") === false);
console.log(attComaprison("6.1", 10) === false);
console.log(attComaprison("6.1", "10.1") === false);