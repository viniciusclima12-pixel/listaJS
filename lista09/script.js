function calcNota() {
  var nota = parseFloat(document.getElementById("nota").value)
    var resp = document.getElementById("resp")
    
    if (nota >= 6) {
        resp.textContent = "Aprovado"
    } else {
        resp.textContent = "Reprovado"

 } 
}