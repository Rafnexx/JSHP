/*

    Zadanie:

        Zamień ponizsze warunki na wersję z ternary op.

*/

function newCheckIfValid(val1, val2) {
    return val1 > val2 ? "val1 is greater than val2" : "val2 is greater than val1";
}

function newMoreComplexCheck(val1, val2, val3) {
    return val1 > val2 ? (
        val1 > (val2 + val3) ? 
        "val1 is greater than val1 + val2" : 
        "val1 is greater than val2 but not greater than val2 + val3"
    ) : "val1 is not greater than val 2"
}


console.log(checkIfValid(1,2) == newCheckIfValid(1,2))
console.log(checkIfValid(12,3) == newCheckIfValid(12,3))
console.log("-----")
console.log(moreComplexCheck(1,2,3) == newMoreComplexCheck(1,2,3))
console.log(moreComplexCheck(3,2,3) == newMoreComplexCheck(3,2,3))
console.log(moreComplexCheck(8,2,3) == newMoreComplexCheck(8,2,3))