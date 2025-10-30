//! Ejercicio 1: Calculadora de propinas
const prompt = require("prompt-sync")();

function calcularPropina(total, porcentaje){
    propi = total-(total*porcentaje)/100;
    return propi;
}
let total = prompt("Ingrese el total de la cuenta: ");
let porcentaje = prompt("Ingrese el porcentaje de la propina: ");
console.log(calcularPropina(total,porcentaje));

//! Ejercicio 2: Validar contraseña
function validarContrasena(contra){
    if(contra.length >=8 & /\d/.test(contra) & contra !== contra.toLowerCase()){
       return true;     
    }
    return false;
}

prompt("Ingrese un usuario: ");
let contra = prompt("Ingrese una contraseña: ");
console.log(validarContrasena(contra));