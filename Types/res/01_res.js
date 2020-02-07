if (Object.is) {
  Object.is = function test_function(val1, val2) {
    const check_if_NaN = x => x !== x;

    if (check_if_NaN(val1) && check_if_NaN(val2)) {
      return true;
    } else {
      if (val1 instanceof Object && val2 instanceof Object) {
        return true;
      } else {
        return val1 === val2;
      }
    }
  };
}

// Tests
let ob1 = {};
let ob2 = {};

console.log(Object.is(ob1, ob2) === true);
console.log(Object.is(2, 2) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(false, false) === true);
console.log(Object.is("test", "test") === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);

console.log(Object.is(undefined, "undefined") === false);
console.log(Object.is(2, "2") === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(ob1, NaN) === false);
