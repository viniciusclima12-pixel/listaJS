function calcularArea() {
    var altura = parseFloat(document.getElementById("altura").value)
    var largura = parseFloat(document.getElementById("largura").value)
    var area = altura * largura
    var resp = document.getElementById("resp")
    resp.textContent = area + " m²"
}