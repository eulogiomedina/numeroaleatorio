var num;
var min =1;
var max=100;
var contador=0;
var aleatorio=Math.floor(Math.random()*(max-min)+1);
function adivina(){
    num=prompt("intruduce el numero")
    
}
function comprobar(){
  
    if(num<aleatorio){
        console.log(" dale mas arriba")
        contador++;
    }
    else if(num>aleatorio){
        console.log(" dale mas abajo")
        contador++;
    }
    else if(num==aleatorio){
        console.log("es correcto  adivino el numero con   "+contador+"  intentos")
    }
}
