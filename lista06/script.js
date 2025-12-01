function mostrarInfo() {
var nome = document.getElementById("nome").value
var idade = parseInt(document.getElementById("idade").value)
var resp = document.getElementById("resp")
resp.textContent = "Ola " + nome + " voce tem " + idade + " anos"

}