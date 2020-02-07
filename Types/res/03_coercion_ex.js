function test_less_then(args) {
  return args[0] < args[1];
}

function test_less_then2(args) {
  return args[0] < args[1] < args[2];
}

function test_greater_then(args) {
  return args[0] > args[1] > args[2];
}

// W miejscu "" wpisz false albo true

console.log(test_less_then([1, 2]) === true);
console.log(test_less_then([2, 1]) === false);

// 1 < 2 < 3
// 1 < 2 daje nam true, true < 3 musi zostać zamienione na liczbę, więc true = 1
// 1 < 3 daje nam true
console.log(test_less_then2([1, 2, 3]) === true);

// 3 < 2 < 1
// 3 < 2 daje nam false, false < 3 musi zostać zamienione na liczbę
// false < true daje nam true
// 0 < 1
console.log(test_less_then2([3, 2, 1]) === true);

// 1 > 2 > 0
// 1 > 2 daje nam false, false > 3 musi zostać zamienione na liczbę, więc false = 0
// 0 > 0 daje nam false
console.log(test_greater_then([1, 2, 3]) === false);

// 3 > 2 > 1
// 3 > 2 daje nam true, true > 1 musi zostać zamienione na liczbę, więc true = 1
// 1 > 1 daje nam false
console.log(test_greater_then([3, 2, 1]) === false);

// 3 > 2 > 1
// 3 > 2 daje nam true, true > 1 musi zostać zamienione na liczbę, więc true = 1
// 1 > 1 daje nam false
console.log(test_less_then([-2, []]) === true);

//test_result(false, true, false, true, false, false, false);
