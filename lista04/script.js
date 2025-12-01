function calcDesconto() {
    var preco = parseFloat(document.getElementById("preco").value)
    var desconto =  0.10
    var precoFinal = preco - (preco * desconto)
    var resp = document.getElementById("resp")
    resp.textContent =  precoFinal.toFixed(2)
}