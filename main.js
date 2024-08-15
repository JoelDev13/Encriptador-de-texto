const inputTexto = document.querySelector(".texto-entrada");
const outputTexto = document.querySelector(".texto-salida");
const muneco = document.querySelector(".muñeco");
const aviso = document.querySelector(".texto-aviso");
const infoTexto = document.querySelector(".texto");

function tieneCaracteresNoPermitidos(texto) {
    const regex = /[^a-zñ0-9\s]/;
    return regex.test(texto);
}

function encriptar() {
    let texto = inputTexto.value;
    texto = texto.toLowerCase();

    if (tieneCaracteresNoPermitidos(texto)) {
        alert("El texto contiene caracteres especiales que no se pueden encriptar.");
        return;
    }

    const reglas = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
        ["ñ", "ny"]
    ];

    for (let i = 0; i < reglas.length; i++) {
        texto = texto.replaceAll(reglas[i][0], reglas[i][1]);
    }

    mostrarResultado(texto);
}

function desencriptar() {
    let texto = inputTexto.value;
    texto = texto.toLowerCase();

    if (tieneCaracteresNoPermitidos(texto)) {
        alert("El texto contiene caracteres especiales que no se pueden desencriptar.");
        return;
    }

    const reglas = [
        ["enter", "e"],
        ["imes", "i"],
        ["ai", "a"],
        ["ober", "o"],
        ["ufat", "u"],
        ["ny", "ñ"]
    ];

    for (let i = 0; i < reglas.length; i++) {
        texto = texto.replaceAll(reglas[i][0], reglas[i][1]);
    }

    mostrarResultado(texto);
}

function mostrarResultado(texto) {
    if (texto.length > 0) {
        document.querySelector("#sin-texto").classList.add("ocultar");
        document.querySelector("#con-texto").classList.remove("ocultar");
        outputTexto.textContent = texto;
        outputTexto.style.color = "#FFFFFF";
        muneco.style.display = "none";
        aviso.style.display = "none";
        infoTexto.style.display = "none";
    } else {
        document.querySelector("#sin-texto").classList.remove("ocultar");
        document.querySelector("#con-texto").classList.add("ocultar");
    }
}

function limpiar() {
    inputTexto.value = "";
    outputTexto.textContent = "";
    muneco.style.display = "block";
    aviso.style.display = "block";
    infoTexto.style.display = "block";
    document.querySelector("#con-texto").classList.add("ocultar");
    document.querySelector("#sin-texto").classList.remove("ocultar");
}

function copiarTexto() {
    const textoACopiar = outputTexto.textContent;
    const inputTemp = document.createElement("textarea");
    inputTemp.value = textoACopiar;
    document.body.appendChild(inputTemp);
    inputTemp.select();
    document.execCommand("copy");
    document.body.removeChild(inputTemp);

    alert("Texto copiado al portapapeles");
}

document.querySelector("#encriptar").addEventListener("click", encriptar);
document.querySelector("#desencriptar").addEventListener("click", desencriptar);
document.querySelector("#limpiar").addEventListener("click", limpiar);
document.querySelector("#copiar").addEventListener("click", copiarTexto);
