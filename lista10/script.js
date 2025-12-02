function compIdades() {
  var idade1 = parseFloat(document.getElementById("idade1").value)
  var idade2 = parseFloat(document.getElementById("idade2").value)
  var resp = document.getElementById("resp")
    if(idade1 > idade2){
     resp.textContent = "A primeira idade é maior"
    }else if(idade2 > idade1){
     resp.textContent = "A segunda idade é maior"
    }else{
     resp.textContent = "As idades são iguais"
    }

}
