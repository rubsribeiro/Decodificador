const textArea = document.querySelector(".textArea");
const mensagem = document.querySelector(".mensagem");

function btnCriptografar() {
    const textoEncriptado = criptografar (textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";

}

function criptografar (stringEncriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }      
}
    return stringEncriptada;

}

function btnDescriptografar() {
    const textoDescriptado = descriptografar (textArea.value);
    mensagem.value = textoDescriptado;
    textArea.value = "";
}

function descriptografar (stringDescriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDescriptado = stringDescriptado.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptado.includes(matrizCodigo[i][1])) {
            stringDescriptado = stringDescriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
}

    return stringDescriptado;
}

function copiarTexto() {
    const textoCopiado = document.getElementById("mensagem");
    textoCopiado.select();
    document.execCommand("copy");
}
