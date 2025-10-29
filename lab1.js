//! 1) Variables y tipos de funciones
let nombre = "sofia";
let edad = 21;
let esEstudiante = true;
let sinValor;
let valorNuevo = null;

console.log(sinValor +" - "+ valorNuevo);

//! 2) Ingreso de datos por teclado
const prompt = require("prompt-sync")();

let nacimiento = prompt("Escriba su año de nacimiento: ");
let yearActual = new Date().getFullYear();
let edadUs = yearActual - nacimiento; 
console.log("Su edad es "+ edadUs);

let num1 = Number(prompt("Ingrese un número: "));
let num2 = Number(prompt("Ingrese otro número: "));
let suma = num1+num2;
console.log("La suma es "+ suma);

//! 3) Condicional if
let edadUsu = Number(prompt("Ingrese un edad: "));

if(edadUsu >= 18){
    console.log("Eres mayor, puedes entrar")
}else {
    console.log("Eres menor, no puedes entrar")
}

let nume1 = Number(prompt("Ingrese un número: "));

if( nume1 > 0){
    console.log("El numero es positivo");
}else if( nume1 < 0){
    console.log("El numero es negativo");
}else{
    console.log("Es igual a cero");
}

