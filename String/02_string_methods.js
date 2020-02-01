// 1. Sprawdź, czy mail zawiera @, ale nie zaczyna się od @
// 2. Przywitaj zgodnie z założeniami: .pl - Cześć, .com - Hey


function testMail() {
    // code here
}


// Hint: do wyrzucenia błędu można zastosować new EvalError("message error")


console.log(testMail("test@example.com") === "Hey");
console.log(testMail("test@example.pl") === "Cześć");
console.log(testMail("@example@.com"));
console.log(testMail("testexample.com").message === "@ missing or @ in a wrong position");
