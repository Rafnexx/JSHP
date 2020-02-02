/*
    Napisz dwie funkcje:

    1. Pierwsza przyjmuje X argumentów i zwraca wynik w postaci:
        [a, b, [c, d, e, f]]

        do funkcji można dodać X argumentów gdzie pierwsze dwa będą wolnymi
        wartościami, a pozostałe będę znajdować się w osobnej tablicy,
        jeśli zostaną podane 2 argumenty to wynika ma wyglądać następująco:

        [a, b, []]

    2. Druga przyjmuje 4 argumenty, z czego ostatni argument jest
    obiektem iterowalnym:

    Funkcja ma zwórcić:
    const tablica = [0, 0, 0, 0]
        fn(1, 2, 3, tablica) => [1, 2, 3, 0, 0, 0, 0]
*/

function firstFunction() {
  // code
}

function secondFunction() {
  // code
}

const sampleArray = [1, 2, 3];
const testFirst = firstFunction(1, 2, 3, 4, 5);
const testSecond = secondFunction(1, 2, 3, sampleArray);

const finalTest = !isEqual(testFirst, [1, 2, [3, 4, 5]]).includes(false);
const finalTest2 = !isEqual2(testSecond, [1, 2, [3, 4, 5]]);

console.log(
  finalTest && finalTest2 ? "Test zaliczony" : "Błąd: Test nie jest zaliczony!"
);

// TEST:
function isEqual(arr1, arr2) {
  return arr2.map((el, index) => {
    if (index == 0 || index == 1) {
      return el == arr2[index];
    } else if (index == 2) {
      return (
        Array.isArray(el) &&
        el.length === 3 &&
        !el.map((a, i) => a == arr1[2][i]).includes(false)
      );
    }
  });
}

function isEqual2(arr1, arr2) {
  return !arr2.map((el, index) => el == arr1[index]).includes(false);
}