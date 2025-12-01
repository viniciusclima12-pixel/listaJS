function converter() {
    var metros = parseFloat(document.getElementById("metros").value)
    var centimetros = metros * 100
    var resp = document.getElementById("resp")
    resp.textContent = centimetros + " cm"
    

    
}