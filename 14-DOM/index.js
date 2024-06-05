//const button = document.getElementById("select-p-button") ?? new HTMLButtonElement();
const button = document.querySelector("#select-p-button"); // se puede con querySelector #(ids) .(para clases) o puede usar por elemento html
const colorsList = document.getElementById("colors-list") ?? new HTMLParagraphElement();
const reloadButton = document.getElementById("reload-colors") ?? new HTMLButtonElement();
const input = document.querySelector("input") ?? new HTMLInputElement();

console.log(button);
button?.addEventListener("click", selectedButton);
reloadButton.addEventListener("click", reloadColors);

function selectedButton() {
    const value = input.value != ""  ? input.value : "red";
    addColor(value);
    input.value = "";
}


/**
 * Añade un elemento a la lista.
 * @param {string} color Nombre del color.
 */
function addColor(color) {
    const p = document.createElement("p");
    p.innerText = color;
    p.style.color = color;
    p.classList.add("color-added");
    p.getClientRects
    p.addEventListener("click", () => {
        colorsList.removeChild(p);
    });
    colorsList.appendChild(p);
}

function reloadColors() {
    // const colors = document.getElementsByClassName("color-added");
    const colors = document.querySelectorAll(".color-added"); // querySelectorAll
    for (const color of colors) {
        if (color instanceof HTMLElement) {
            color.style.color = "black";
        }
    }
}