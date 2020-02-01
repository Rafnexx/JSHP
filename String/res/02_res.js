function testMail(mail) {
    const greet = mail.endsWith("com") ? "Hey" : "Cześć";
    const mailValidation = mail.includes("@") && !mail.startsWith("@");

    return mailValidation ? greet : new EvalError("@ missing or @ in a wrong position");
}

const testValue = "asd@gmail.com";

testMail(testValue);
