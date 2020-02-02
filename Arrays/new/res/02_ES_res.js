function firstFunction(a, b, ...d) {
  return [a, b, d];
}

function secondFunction(a, b, c, d) {
  return [a, b, c, ...d];
}


const sampleArray = [1, 2, 3];
const testFirst = firstFunction(1, 2, 3, 4, 5);
const testSecond = secondFunction(1, 2, 3, sampleArray)

const finalTest = !isEqual(testFirst, [1, 2, [3, 4, 5]]).includes(false);
const finalTest2 = !isEqual2(testSecond, [1, 2, [3, 4, 5]]);

console.log(finalTest && finalTest2 ? "Test zaliczony" : "Błąd: Test nie jest zaliczony!");


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