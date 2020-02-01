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

const getStolenCars = stolenCarId =>
    carDetailReport.find(car => (car.id === stolenCarId))

const getRecords = idOfWatchedCars =>
    idOfWatchedCars.map(getStolenCars)
        .sort((prev, next) => (prev.brand > next.brand) ? 1 : (prev.brand < next.brand) ? -1 : 0
            .forEach((car) => console.log(`[${car.id}] ${car.brand}, ${car.stolen ? "stolen status confirmed" : "car is not stolen"}`)));

/*
    Zadanie:
    Napisz funkcję która umieści tylko skradzione auta w osobnej liście
*/

const getOnlyIdsOfStolenCars = carDetailReport =>
    carDetailReport.filter(car => car.stolen)
        .map(car => car.id)
