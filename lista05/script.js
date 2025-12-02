function calcMedia() {
    var peso1 = parseFloat(document.getElementById("peso1").value)
    var peso2 = parseFloat(document.getElementById("peso2").value)
    var media = (peso1 + peso2) / 2
    var resp = document.getElementById("resp")
    resp.textContent = media + " kg"
}