function calcular() {
    let x1 = parceFloat(document.getElementById("x1").value);
    let y1 = parceFloat(document.getElementById("y1").value);
    let x2= parceFloat(document.getElementById("x2").value);
    let y2 = parceFloat(document.getElementById("y2").value);

    let dx = x2 - x1;
    let dy = y2 - y1;

    let distancia = Math.sqrt(dx * dx + dy * dy);

    document.getElementById("resultado").innerText = 
    `A distância entre P1(${x1},${y1}) e P2(${x2},${y2}) é igual a ${distancia.toFixed(2)}.`;

}