/*
    Napisz funkcje które:
        0. Napisz funkcję która wewnątrz będzie miała pętlę for która będzie sumowała elementy z tablicy.
        Suma powinna być przechowywana w zmiennej którą to funkcja zwróci.

        0.5. Napisz powyszą funkcję z wykorzystaniem pętli for-of

        1. Funkcja przyjmuje tablicę i zwraca sumę jej elementów:
            fn([1,2,3]) zwróci 6
        2. W banku mamy 2345 zł. Raz w miesiącu wrzucaliśmy pewną ilość monet do skarbonki - za kadym razem zapisywaliśmy ile
        wrzuciliśmy w postaci liczby dodając do naszej tablicy.

        W planach mamy zakup nowego laptopa za 3000 zł.

        Chcemy napisać funkcję, by usprawnić nasz proces. Przy dodawaniu kolejnej porcji gotówki chcemy wiedzieć ile juz mamy i ile
        nam brakuje do zakupu.

            - Napisz funkcję która: będzie przyjmowała tablicę jako argument oraz wartość nowego urządzenia oraz ilość gotówki w banku
            - będzie zliczała ilość gotówki w naszej tablicy (skarbonce) oraz dodawała do wartości nowego urządzenia
            - przy kadym wywołaniu naszej funkcji dostaniemy informację zwrotną, ile nam została lub czy juz mozemy kupić sprzęt

            (demo)

            fn(arr, bankMoney, LaptopPrice)
            fn([500, 23, 14, 33], 2345, 3000) => Masz w banku 2345 zł, łącznie z oszczędnościami daje nam to X. Brakuje Ci jeszcze tyle.

*/

// 0

function sumWithLoop(arr) {
  // code
}

// 0.5.

function sumWithOfLoop(arr) {
  // code
}

// 1
function sumElements(arr) {
  // code
}

// 2

function spareMoneyFeedback(arr, bankMoney, devicePrice) {
  // code
}

// TESTS
const firstTestCaseArray = [1, 2, 3, 4, 5]; // 15
const secondTestCaseArray = [50, 20, 30]; // 100
const thirdTestCaseArray = [50, 20, 30, -100]; // 200

const BANK_MONEY = 2345;
const DEVICE_PRICE = 3000;
const spareMoney = [23, 1, 14, 55, 200, 134, 33, 2];

const BANK_MONEY2 = 2645;
const DEVICE_PRICE2 = 3000;
const spareMoney2 = [23, 1, 14, 55, 200, 134, 33, 200];

console.log("%c(sumWithLoop)", "color: #fab525");
console.log(
  sumWithLoop(firstTestCaseArray) == 15,
  sumWithLoop(secondTestCaseArray) == 100,
  sumWithLoop(thirdTestCaseArray) == 0
);

console.log("%c(sumWithOfLoop)", "color: #1ca1f3");
console.log(
  sumWithOfLoop(firstTestCaseArray) == 15,
  sumWithOfLoop(secondTestCaseArray) == 100,
  sumWithOfLoop(thirdTestCaseArray) == 0
);
console.log("%c(sumElements)", "color: #ff0000");
console.log(
  sumElements(firstTestCaseArray) == 15,
  sumElements(secondTestCaseArray) == 100,
  sumElements(thirdTestCaseArray) == 0
);
console.log("%c(spareMoneyFeedback)", "color: #fab525");
console.log(spareMoneyFeedback(spareMoney, BANK_MONEY, DEVICE_PRICE));
console.log(spareMoneyFeedback(spareMoney2, BANK_MONEY2, DEVICE_PRICE2));
