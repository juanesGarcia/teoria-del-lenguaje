function capturar1(){
 
    
     capturarele=document.getElementById("alfabeto1").value;
     
    if(capturarele.length==1){
        console.log(capturarele)
        agregar1();
    }else{
        alert("tiene que digitar solo un simbolo");
    }
}

function capturar2(){
    capturarele2=document.getElementById("alfabeto2").value;
    if(capturarele2.length==1){
        console.log(capturarele2)
        agregar2();
    }else{
        alert("tiene que digitar solo un simbolo");
    }
}

var alf1= [];
 function agregar1(){
     alf1.push(capturarele);
    console.log(alf1);
}

var alf2 = [];
function agregar2(){
    alf2.push(capturarele2);
   console.log(alf2);
}

function inter(){
    var intera=[];
    for(var i=0;i<alf1.length;i++){
        for(var j=0;j<alf2.length;j++){
            if(alf1[i]==alf2[j]){
                intera.push(alf1[i]);
            }
               
        }
    
    }
    console.log(inter);
    if(intera.length==0){
        document.getElementById("a").innerHTML= "no existe una intercesion";

    }else{
        document.getElementById("a").innerHTML= intera.toString();

    }
   
}

function dif(){
    var di = []
    for(var i=0;i<alf1.length;i++){
       if(existe(alf2,alf1[i])==false){
            di.push(alf1[i]);
       }
    }
    console.log(di);
    document.getElementById("a2").innerHTML= di.toString();
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

function union(){
    var uni=[];
    for(var i=0;i<alf1.length;i++){
        uni.push(alf1[i]);
    }

    for(var j=0;j<alf2.length;j++){
        if(existe(uni,alf2[j])==false){
            uni.push(alf2[j]);
        }
    }
  document.getElementById("a1").innerHTML=uni.toString();
 }