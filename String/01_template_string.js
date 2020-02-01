// 1 bez wykorzystania obiektu
function addElement() {
    // code here
}

// dodanie linków do DOM przez funkcję

// 2 z wykorzystaniem tablicy z obiektami
const urlArray = [
    { url: "https://www.google.pl/", name: "google" },
    { url: "https://www.facebook.pl/", name: "facebook" },
];


function addMany() {
    // code here
}


const addButton = document.createElement("button");
addButton.innerText = "ADD";
document.body.appendChild(addButton);

// dodanie linków do DOM przez funkcję: addElement lub addMany
const addLinks = () => {
    document.body.insertAdjacentHTML("beforeend", addMany(urlArray));
};

addButton.addEventListener("click", addLinks);
