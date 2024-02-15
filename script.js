//Elementos HTML
const txa_entrada = document.getElementById("txa_Entrada");
const txa_salida = document.getElementById("txa_Resultado");
const btn_encriptar = document.getElementById("btn_Encriptar");
const btn_desencriptar = document.getElementById("btn_Desencriptar");
const btn_limpiar = document.getElementById("btn_Limpiar");

function encriptar(texto_entrada) {
    if (validaciones() === false) {
        limpiar();
        return "";
    }

    let texto = texto_entrada;

    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    return texto;
}

function desencriptar(texto_entrada) {
    if (validaciones() === false) {
        limpiar();
        return "";
    }

    let texto = texto_entrada;

    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    return texto;
}

function limpiar() {
    txa_entrada.value = "";
    txa_salida.value = "";
    btn_encriptar.disabled = true;
    btn_desencriptar.disabled = true;
    btn_limpiar.disabled = true;
}

function validaciones() {
    //validar que el input no este vacio ni tenga caracteres prohibidos

    //No debe estar vacio
    if (txa_entrada.value === "") {
        alert("El campo de texto no puede estar vacio");
        return false;
    }

    //No debe contener mayusculas
    if (/[A-Z]/.test(txa_entrada.value)) {
        alert("El campo de texto no puede contener mayusculas");
        return false;
    }

    //No debe contener caracteres especiales
    if (/[!@#$%^&*(),.?":{}|<>]/.test(txa_entrada.value)) {
        alert("El campo de texto no puede contener caracteres especiales");
        return false;
    }

    //No debe contener ascentos
    if (/[áéíóú]/.test(txa_entrada.value)) {
        alert("El campo de texto no puede contener ascentos");
        return false;
    }
}

function main() {
    //Se sugiere deshabilitar los botones hasta que el usuario ingrese texto
    txa_entrada.addEventListener("input", function () {
        // Verificar si el textarea tiene texto
        if (txa_entrada.value.trim().length > 0) {
            // Habilitar el botón
            btn_encriptar.disabled = false;
            btn_desencriptar.disabled = false;
        } else {
            // Deshabilitar el botón
            btn_encriptar.disabled = true;
            btn_desencriptar.disabled = true;
        }
    });

    btn_encriptar.addEventListener("click", () => {
        txa_salida.value = encriptar(txa_entrada.value);
        btn_limpiar.disabled = false;
    });

    btn_desencriptar.addEventListener("click", () => {
        txa_salida.value = desencriptar(txa_entrada.value);
        btn_limpiar.disabled = false;
    });

    btn_limpiar.addEventListener("click", () => {
        limpiar();
    });
}

main();
