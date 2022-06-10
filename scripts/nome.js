document.getElementById("submite").disabled = true;
document.getElementById("input").addEventListener("input", function (event) {

  var conteudo = document.getElementById("input").value;
  if (conteudo !== null && conteudo !== '') {

    document.getElementById("submite").disabled = false;
  } else {
    document.getElementById("submite").disabled = true;
  }
});

var vnome;
var vnome2;
  function gravar(){
  vnome = document.getElementById("input").value;
  localStorage.jogadorNome = vnome;
  var storageLocal = localStorage.getItem('jogadornome')
  document.body.querySelector("#painel").innerHTML = storageLocal;

  vnome2 = document.getElementById("input1").value;
  localStorage.jogadornome2 = vnome2 
  var storageLocal2 = localStorage.getItem('jogadornome')
  document.body.querySelector("#nome2").innerHTML = storageLocal2;
  }

