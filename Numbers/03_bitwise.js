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

    return obj.permissions[permissionValue] & myPerm ? true : false;
};

console.log(permissionCheck(Tomek, readPerm) === true);
console.log(permissionCheck(Tomek, writePerm) === true);
console.log(permissionCheck(Asia, readPerm) === true);
console.log(permissionCheck(Asia, writePerm) === false);
console.log(permissionCheck(John, readPerm) === false);
console.log(permissionCheck(John, writePerm) === false);
