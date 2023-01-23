function textFinal(texto) {
    document.getElementById("resultado").innerHTML = `
    <textarea id="output" class="output" rows="8" readonly style="color:#000000"></textarea>
    <button class="buttonEncriptar" onclick="copiar()">Copiar</button>`;
}

function validacion(texto) {
    let regex = /[A-ZÀ-ú]/ ;
    return (!regex.test(texto) && texto !='') ;
}

function encriptar(texto) {
    let newtexto = texto.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return newtexto;
}

function desencriptar(texto) {
    let newtexto = texto.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return newtexto;
}

function verEncriptado() {
    let texto = document.getElementById("textIngresado").value;
    if(validacion(texto)) {
        textFinal(texto);
        document.getElementById("output").value = encriptar(texto);
        document.getElementById('textIngresado').value="";
    } else {
        document.getElementById("resultado").innerHTML= `<div class="imgAvatar">
        <img src="img/advertencia.png" alt="Imagen de persona"></div>
        <p>Ningún texto fue encontrado o se ingresaron mayúsculas o tildes.</p>`;
    }
}

function verDesencriptado() {
    let texto = document.getElementById("textIngresado").value;
    if(validacion(texto)) {
        textFinal(texto);
        document.getElementById("output").value = desencriptar(texto);
        document.getElementById('textIngresado').value="";
    } else {
        document.getElementById("resultado").innerHTML= `<div class="imgAvatar">
        <img src="img/advertencia.png" alt="Imagen de persona"></div>
        <p>Ningún texto fue encontrado o se ingresaron mayúsculas o tildes.</p>`;
    }
}

function copiar() {
    let copiedText = document.getElementById("output").value;
    navigator.clipboard.writeText(copiedText);
}