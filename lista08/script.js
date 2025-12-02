function calcularTriplo() {
  var n = parseFloat(document.getElementById("numero").value)
  var triplo = n * 3
  var resp = document.getElementById("resp")
  resp.textContent = triplo
}
