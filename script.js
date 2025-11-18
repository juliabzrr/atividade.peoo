function repetir() {
    let frase = document.getElementById("frase").value;
    let quantidade = 
parseInt(document.getElementById("quantidade").value);
let saida = document.getElementById("saida");

saida.innerHTML = "";

if (frase ==="") {
    saida.innerHTML = "Digite uma frase.";
    return;
}

if (isNaN(quantidade) || quantidade <=0) {
    saida.innerHTML = "Digite uma quantidade válida.";
    return;

}

let textoFinal ="";
for (let i=0;i<quantidade;i++){
    textoFinal+= frase+"<br>";

}

saida.innerHTML=textoFinal



}