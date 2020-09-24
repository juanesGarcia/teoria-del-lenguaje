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
