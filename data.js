document.getElementById("b").addEventListener("click", mostra, false);


function mostra() {
	var n = document.getElementById("nasc").value.split("-");
  
  n = new Date(n);
  var h = new Date();
	document.getElementById("idade").innerHTML = idade(n, h);
}

function idade(nascimento, hoje) {
    var diferencaAnos = hoje.getFullYear() - nascimento.getFullYear();
    if ( new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) < 
         new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate()) )
        diferencaAnos--;
    return diferencaAnos;
}