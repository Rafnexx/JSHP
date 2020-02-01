const readPerm = 4;
const writePerm = 2;

const Tomek = {
    name: "Tomek",
    permissions: {
        readPerm,
        writePerm,
    },
};

const Asia = {
    name: "Asia",
    permissions: {
        readPerm,
    },
};

const John = {
    name: "John",
    permissions: {},
};

const permissionCheck = (obj, permission) => {
    const myPerm = readPerm | writePerm;
    let permissionValue = permission;

    if (permission === readPerm) permissionValue = "readPerm";
    else if (permission === writePerm) permissionValue = "writePerm";
    else return "Nope";

    return (obj.permissions[permissionValue] & myPerm) ? true : false;
};

console.log(permissionCheck(Tomek, readPerm) === true);
console.log(permissionCheck(Tomek, writePerm) === true);
console.log(permissionCheck(Asia, readPerm) === true);
console.log(permissionCheck(Asia, writePerm) === false);
console.log(permissionCheck(John, readPerm) === false);
console.log(permissionCheck(John, writePerm) === false);

// class Person {
//     constructor(name, permissions = null) {
//         this.name = name;
//         this.permissions = permissions;
//     }

//     getName() {
//         console.log(this.name)
//     }
// }

// const readPerm = 4;
// const writePerm = 2;
// const Tomek = new Person("Tomek", { readPerm, writePerm })

// const permission_check = permission_value => {
//     let my_permissions = 0;
//     my_permissions = my_permissions | readPerm | writePerm;
//     let checking;

//     if (permission_value == readPerm) checking = "readPerm"
//     else if (permission_value == writePerm) checking = "writePerm"
//     else return "Invalid permission check"

//     return (obj) => {
//         let message = (my_permissions & obj.permissions[checking]) ?
//             `${checking} confirmed` : `${checking} not confirmed`;

//         console.log(message);
//     }
// }
