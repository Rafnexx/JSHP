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
        read_perm
    }
}

const John = {
    name: "John",
    permissions: {}
}

function permission_check(obj, permission) {
    let my_perm = read_perm | write_perm;
    let check;

    if (permission == read_perm) permission = "read_perm"
    else if (permission == write_perm) permission = "write_perm"
    else return "Nope"

    return (obj.permissions[permission] & my_perm) ? true : false
}

console.log(permission_check(Tomek, read_perm) == true)
console.log(permission_check(Tomek, write_perm) == true)
console.log(permission_check(Asia, read_perm) == true)
console.log(permission_check(Asia, write_perm) == false)
console.log(permission_check(John, read_perm) == false)
console.log(permission_check(John, write_perm) == false)

// class Person {
//     constructor(name, permissions = null) {
//         this.name = name;
//         this.permissions = permissions;
//     }

//     getName() {
//         console.log(this.name)
//     }
// }

// const read_perm = 4;
// const write_perm = 2;
// const Tomek = new Person("Tomek", { read_perm, write_perm })

// const permission_check = permission_value => {
//     let my_permissions = 0;
//     my_permissions = my_permissions | read_perm | write_perm;
//     let checking;

//     if (permission_value == read_perm) checking = "read_perm"
//     else if (permission_value == write_perm) checking = "write_perm"
//     else return "Invalid permission check"

//     return (obj) => {
//         let message = (my_permissions & obj.permissions[checking]) ?
//             `${checking} confirmed` : `${checking} not confirmed`;

//         console.log(message);
//     }
// }








