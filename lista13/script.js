function veriNumero(){
    var numero = parseFloat(document.getElementById("numero").value)
    var resp = document.getElementById("resp")

    if(numero %5 ==0){
        resp.textContent = " O numero " + numero + " é multiplo de 5 "
    }else{
        resp.textContent = "O numero " + numero + " não é multiplo de 5 "
    }


}