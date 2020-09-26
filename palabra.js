function capturarpalabra(){
    capturapa=document.getElementById("palabra").value;
    console.log(capturapa);
    console.log(capturapa.length);
}

function cardinalidad() {
    document.getElementById("p1").innerHTML= capturapa.length;
}

function inversa(){
    var x=capturapa.length;
    var cadenaInvertida=" ";
    while (x>=0) {
        cadenaInvertida = cadenaInvertida + capturapa.charAt(x);
        x--;
      }
      document.getElementById("p2").innerHTML= cadenaInvertida;
}