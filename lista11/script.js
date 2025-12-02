function descontoIdade(){
   var sexo = document.getElementById("sexo").value
   var idade = document.getElementById("idade").value
   var resp = document.getElementById("resp")


  if(sexo == "M" || sexo == "m"){
   if(idade >= 40){
    resp.textContent = "Voce tem 40 anos voce tem direito a desconto"
  }else{
    resp.textContent = "Voce não tem 40 anos voce não direito a desconto" 
  }
 }
 
  if(sexo =="F" || sexo == "f"){
    if(idade >= 50){
    resp.textContent = "Voce tem 50 anos voce tem direito a desconto"
    }else{
    resp.textContent = "Voce não tem 50 anos voce não tem direito a desconto"
    
    }
  }
}