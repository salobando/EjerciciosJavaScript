const prompt = require("prompt-sync")();

let number = prompt("Escriba un número");

let operacion = number*3;

console.log(number);

let edad = 18;

if(edad >= 18){
    console.log("Eres mayor")
}else if(edad <= 18){
    console.log("Eres menor")
}
let cont=0;
while(cont <3){
    console.log("lleva ")
    cont++;
}

//! FOR
for (let i = 0; i < 5; i++){
    console.log(i);    
}


