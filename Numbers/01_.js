function deconstruct(number) {
    // znak
    let sign = 1;
    // współczynnik
    let coefficient = number;
    // wykładnik potęgowy
    let exponent = 0;

    // rozdzielenie znaku i liczby
    if (coefficient < 0) {
        coefficient = -coefficient;
        sign = -1;
    }

    if (Number.isFinite(number) && number !== 0) {
        // Możemy uzyskać wykładnik przez podzielenie liczby przez 2 (podstawa),
        // a nie będzie miało zera z przodu (do postaci 0.04375 na przykład)
        //dododajemy liczbę podziałów do -1128, która jest wykładnikiem najmniejszej liczby
        // minus liczba bitów w znaczeniu i minus bit bonusowy
        exponent = -1128;
        let reduction = coefficient;
        while (reduction !== 0) {
            exponent += 1;
            reduction /= 2;
        }

        reduction = exponent;
        while (reduction > 0) {
            coefficient /= 2;
            reduction -= 1;
        }
        while (reduction < 0) {
            coefficient *= 2;
            reduction += 1;
        }
    }

    return {
        sign,
        coefficient,
        exponent,
        number
    }
}

const check1 = deconstruct(16.7);
const check2 = deconstruct(1);
const check3 = deconstruct(0.1);
const check4 = deconstruct(5);
const check5 = deconstruct((0.1 + 0.2));
const check6 = deconstruct(0.54);

console.log(check1);
console.log(check2);
console.log(check3);
console.log(check4);
console.log(check5);
console.log(check6);

const validate = obj => {
    return obj.sign * obj.coefficient * (2 ** obj.exponent);
}

console.log(16.7 == validate(check1));
console.log(1 == validate(check2));
console.log(0.1 == validate(check3));
console.log(5 == validate(check4));
console.log(0.3 == validate(check5));
console.log(0.54 == validate(check6));