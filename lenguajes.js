 function captulen1(){
    capturalen1=document.getElementById("len1").value;
    console.log(capturalen1);
    agregar1();
}

function captulen2(){
    capturalen2=document.getElementById("len2").value;
    console.log(capturalen2);
    agregar2();

}

var len1=[];
function agregar1(){
    len1.push(capturalen1);
    console.log(len1);
}

var len2=[];
function agregar2(){
    len2.push(capturalen2);
    console.log(len2);
}

function existe(con,x){
    var existe=false;
    for(var i=0;i<con.length;i++){
        if(con[i]==x){
            existe=true;
        }
    }
    return existe;
}

function unilen(){
    var uni=[];
    for(var i=0;i<len1.length;i++){
        uni.push(len1[i]);
    }

    for(var j=0;j<len2.length;j++){
        if(existe(uni,len2[j])==false){
            uni.push(len2[j]);
        }
    }
  document.getElementById("unilen").innerHTML=uni.toString();
 }

 function diflen(){
    var di = []
    for(var i=0;i<len1.length;i++){
       if(existe(len2,len1[i])==false){
            di.push(len1[i]);
       }
    }
    console.log(di);
    document.getElementById("difelen").innerHTML= di.toString();
}

function interlen(){
    var intera=[];
    for(var i=0;i<len1.length;i++){
        for(var j=0;j<len2.length;j++){
            if(len1[i]==len2[j]){
                intera.push(len1[i]);
            }
               
        }
    
    }
    console.log(intera);
    if(intera.length==0){
        document.getElementById("interleng").innerHTML= "no existe una intercesion";

    }else{
        document.getElementById("interleng").innerHTML= intera.toString();
    }
}

function conca(){
    var concat=[];
    for(var i=0;i<len1.length;i++){
        for(var j=0;j<len2.length;j++){
            c=len1[i]+" "+len2[j]
            concat.push(c);
         }
    }
    document.getElementById("concatenacion").innerHTML= concat.toString();
 }

 function inversa(){
    
    palabrasv(len1);
    document.getElementById("inverlen").innerHTML= pala.toString();
    palabrasv(len2);
    document.getElementById("inverlen1").innerHTML= pala.toString();

    
 }

 function palabrasv(x){
     pala=[];
    for(var i=0;i<x.length;i++){
        var v=x[i].length;
        var cadenaInvertida=" ";
    while (v>=0) {
        cadenaInvertida = cadenaInvertida + x[i].charAt(v);
        v--;
      }
      pala.push(cadenaInvertida);
    }
 }

function cardinalidad(){
    document.getElementById("cardilan").innerHTML= len1.length;
    document.getElementById("cardilan1").innerHTML= len2.length;
}