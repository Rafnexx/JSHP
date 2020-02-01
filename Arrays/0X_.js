var idOfStolenCars = [84747412, 1238474, 12333123];

var carDetailReport = [
    { id: 00000010, brand: "Mercedes", stolen: true, color: "red" },
    { id: 84747412, brand: "BMW", stolen: false, color: "blue" },
    { id: 88747584, brand: "Henry", stolen: false, color: "green" },
    { id: 8977668, brand: "Ford", stolen: true, color: "red" },
    { id: 1238474, brand: "Tesla", stolen: false, color: "yellow" },
    { id: 3123809, brand: "Renault", stolen: true, color: "red" },
    { id: 12333123, brand: "VW", stolen: true, color: "red" },
    { id: 33312, brand: "Ursus", stolen: false, color: "red" },
];

/*
    Zadanie:
    Musisz uzyskać status aut z list  dla policji, w kolejności alfabetycznej pod względem nazwy marki

    Pomoc:
        - stwórz funckję wykorzystującą metodę .find, którą, wykorzystasz do odfiltrowania innych aut
        - przy pomocy .sort następnie posortuj tablicę
        - zwróć rekordy w postaci: '[33312] Ford, stolen status confirmed'
*/

function getStolenCars(stolenCarId) {
    // code
}

function getRecords(idOfStolenCars) {
    let filteredRecords;


    filteredRecords.sort(function (args) {
        // code
    })

    filteredRecords.forEach(function (car) {
        // code
    })

    return result;
}