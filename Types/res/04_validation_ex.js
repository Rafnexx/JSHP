function nameValidation(name) {
    if (typeof name === "string") {
        return name.trim().length > 2;
    }

    return false
}

function attComaprison(att, len) {
    if (((typeof att === "string" || typeof att === "number") && att != "") &&
        ((typeof len === "string" || typeof len === "number") && len != "")) {

        let is_Integer = Number.isInteger(Number(att)) && Number.isInteger(Number(len));
        let grater_then_zero = Number(att) >= 0 && Number(len) >= 0;
        let attendand_check = Number(att) <= Number(len);

        return (is_Integer && grater_then_zero && attendand_check);

    } else {
        return false;
    }
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

