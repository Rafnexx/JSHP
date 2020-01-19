// Napisz funkcję, która będzie sprawdzała uprawnienia użytkowników

"use strict";

const read_perm = 4;
const write_perm = 2;

const Tomek = {
    name: "Tomek",
    permissions: {
        read_perm,
        write_perm
    }
}

const Asia = {
    name: "Asia",
    permissions: {
        read_perm: read_perm
    }
}

const John = {
    name: "John",
    permissions: {}
}

function permission_check(obj, permission) {
    // stworzenie elementu do którego będziemy porównywać
    // stworzenie kodu dzięki któremu dostaniemy się do właściwości obj i będziemy mogli
    // porównać przy pomocy bitwise operator uprawnienia obiektu i nasze bazowe
    // zwracanie true lub false
}


console.log(permission_check(Tomek, read_perm) == true)
console.log(permission_check(Tomek, write_perm) == true)
console.log(permission_check(Asia, read_perm) == true)
console.log(permission_check(Asia, write_perm) == false)
console.log(permission_check(John, read_perm) == false)
console.log(permission_check(John, write_perm) == false)







