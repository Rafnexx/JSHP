function test_mail(mail) {
    let greet = mail.endsWith("com") ? "Hey" : "Cześć";
    let mail_validation = mail.includes("@") && !mail.startsWith("@") ? true : false;

    return mail_validation ? greet : new EvalError("@ missing or @ in a wrong position");
}