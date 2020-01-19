"use strict";

// 1. Sprawdź, czy mail zawiera @, ale nie zaczyna się od @
// 2. Przywitaj zgodnie z założeniami: .pl - Cześć, .com - Hey


function test_mail(mail) {
    // code here
}


// Hint: do wyrzucenia błędu można zastosować new EvalError("message error")


console.log(test_mail("test@example.com") == "Hey")
console.log(test_mail("test@example.pl") == "Cześć")
console.log(test_mail("@example@.com"))
console.log(test_mail("testexample.com").message == "@ missing or @ in a wrong position")