// 1 bez wykorzystania obiektu
function addElement(url, name) {
    // code here
};

// dodanie linków do DOM przez funkcję






// 2 z wykorzystaniem tablicy z obiektami
const arr = [
    { url: "https://www.google.pl/", name: "google" },
    { url: "https://www.facebook.pl/", name: "facebook" }
];


function addMany(arr) {
    // code here
};

const addButton = document.createElement("button");
addButton.innerText = "ADD";
document.body.appendChild(addButton)

addButton.addEventListener("click", function () {
    // dodanie linków do DOM przez funkcję
})