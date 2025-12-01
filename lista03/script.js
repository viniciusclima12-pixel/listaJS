function convertCpF() {
    var celsius = parseFloat(document.getElementById("celsius").value)
    var fahrenheit = (celsius * 9/5) + 32
    var resp = document.getElementById("resp")
    resp.textContent = fahrenheit + " °f"


}