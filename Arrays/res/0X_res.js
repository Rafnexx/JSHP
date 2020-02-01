var idOfWatchedCars = [84747412, 1238474, 12333123];

var carDetailReport = [
    { id: 20000010, brand: "Mercedes", stolen: true, color: "red" },
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
    return carDetailReport.find(function (car) {
        return (car.id === stolenCarId)
    })
}

function getRecords(idOfWatchedCars) {
    let filteredRecords = idOfWatchedCars.map(getStolenCars);
    const result = [];

    filteredRecords.sort(function (prev, next) {
        if (prev.brand > next.brand) return 1;
        else if (prev.brand < next.brand) return -1;
        else return 0;
    })

    filteredRecords.forEach(function (car) {
        result.push(`[${car.id}] ${car.brand}, ${car.stolen ? "stolen status confirmed" : "car is not stolen"}`)
    })

    return result;
}


/*
    Zadanie:
    Napisz funkcję która umieści tylko skradzione auta w osobnej liście
*/

function getOnlyIdsOfStolenCars(carDetailReport) {
    const onlyStolenCars = carDetailReport.filter(function getIdOfStolenCar(car) {
        return car.stolen
    })

    const idsOfStolenCars = onlyStolenCars.map(function getIds(car) {
        return car.id
    })

    return idsOfStolenCars;
}