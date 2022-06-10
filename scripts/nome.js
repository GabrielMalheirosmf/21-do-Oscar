document.getElementById("submite").disabled = true;

document.getElementById("input").addEventListener("input", function(event){


    var conteudo = document.getElementById("input").value;
 
    if (conteudo !== null && conteudo !== '') {

      document.getElementById("submite").disabled = false;
    } else{
      document.getElementById("submite").disabled = true;
    }
});

var vnome;
function gravar(){
  vnome=document.getElementById("input").value;
  localStorage.jogadorNome=vnome;
}
if(localStorage.jogadorNome){
  vnome=localStorage.jogadorNome;
  document.getElementById("painel").innerHTML= "bem vindo" + vnome;
}
