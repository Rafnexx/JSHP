//1
function addElement(url, name) {
    return `
        <ul>
            <li><a target="_blank" href=${url}>${name}</a></li>
        </ul>
    `;
};

document.body.insertAdjacentHTML("beforeend", addElement("https://www.google.pl/", "google"));

//2

const arr = [
    { url: "https://www.google.pl/", name: "google" },
    { url: "https://www.facebook.pl/", name: "facebook" }
];

function addMany(arr) {
    return `
        <ul>
            ${arr.map(element => (
        `<li><a target="_blank" href=${element.url}>${element.name}</a></li>`
    )).join("")}
        </ul>
    `;
};

const addButton = document.createElement("button");
addButton.innerText = "ADD";
document.body.appendChild(addButton)
addButton.addEventListener("click", function () {
    document.body.insertAdjacentHTML("beforeend", addMany(arr))
})