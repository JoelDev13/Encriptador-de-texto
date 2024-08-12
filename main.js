const inputTexto = document.querySelector(".texto-entrada");
const outputTexto = document.querySelector(".texto-salida");
const muneco = document.querySelector(".muñeco");
const aviso = document.querySelector(".texto-aviso");
const infoTexto = document.querySelector(".texto");

function encriptar() {
    let texto = inputTexto.value.toLowerCase();

    const reglas = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    for (let i = 0; i < reglas.length; i++) {
        texto = texto.replaceAll(reglas[i][0], reglas[i][1]);
    }

    outputTexto.textContent = texto;
    muneco.style.display = "none";
    aviso.style.display = "none";
    infoTexto.style.display = "none";
    document.querySelector(".sin-input").classList.remove("ocultar");
}

function desencriptar() {
    let texto = inputTexto.value.toLowerCase();

    const reglas = [
        ["enter", "e"],
        ["imes", "i"],
        ["ai", "a"],
        ["ober", "o"],
        ["ufat", "u"]
    ];

    for (let i = 0; i < reglas.length; i++) {
        texto = texto.replaceAll(reglas[i][0], reglas[i][1]);
    }
    outputTexto.textContent = texto;
    muneco.style.display = "none";
    aviso.style.display = "none";
    infoTexto.style.display = "none";
    document.querySelector(".sin-input").classList.remove("ocultar");
}

function limpiar() {
    inputTexto.value = "";
    outputTexto.textContent = "";
    muneco.style.display = "block";
    aviso.style.display = "block";
    infoTexto.style.display = "block";
    document.querySelector(".sin-input").classList.add("ocultar");
}

document.querySelector("#encriptar").addEventListener("click", encriptar);
document.querySelector("#desencriptar").addEventListener("click", desencriptar);
document.querySelector("#limpiar").addEventListener("click", limpiar);


