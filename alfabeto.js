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
    var inter=[]
    for(var i=0;i<alf1.length;i++){
        for(var j=0;j<alf2.length;j++){
            if(alf1[i]==alf2[j]){
                inter.push(alf1[i]);
            }
               
        }
    
    }
    if(inter.length==0){
        document.getElementById("a").innerHTML= "no existe una intercesion";

    }else{
        document.getElementById("a").innerHTML= inter.toString();

    }
   
}

function dif(){
    var dif = []
    for(var i=0;i<alf1.length;i++){
        var cont=0;
        for(var j=0;j<alf2.length;j++){
            if(alf1[i]!==alf2[j]){
               if(cont==alf2.length){
                   dif.push(alf1[i])
               }
            }
            cont++;   
        }
    
    }
    document.getElementById("a2").innerHTML= dif.toString();
}
