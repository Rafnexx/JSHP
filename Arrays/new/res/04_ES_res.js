/*
    Przy pomocy poznanych metod napisz funkcję, która:
    Sprawdzi tablicę i zwróci obiekt z x > 10 i y < 10

    - wykorzystując .find
*/

function findMatch(el) {
  return el.x > 10 && el.y < 10;
}

function testWithFind(arr) {
  //return arr.find(findMatch);
  //   LUB
  //   return arr.filter(el => {
  //     return el.x > 10 && el.y < 10;
  //   })[0];
}

const testArr = [
  { x: 2, y: 5 },
  { x: 55, y: 12 },
  { x: 5, y: 8 },
  { x: 15, y: 9 }
];

console.log(testResult(testWithFind(testArr), { x: 15, y: 9 }));

function testResult(arr1, model) {
  const givenArr = Object.entries(arr1).flat();
  const givenModel = Object.entries(model).flat();
  const testPassed = !givenModel
    .map((element, i) => element === givenArr[i])
    .includes(false);

  return testPassed ? "TEST ZALICZONY" : "TEST NIE ZOSTAŁ ZALICZONY";
}
