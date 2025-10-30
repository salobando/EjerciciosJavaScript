//! Ejercicio 1: Calculadora de propinas
const prompt = require("prompt-sync")();

function calcularPropina(total, porcentaje){
    propi = total-(total*porcentaje)/100;
    return propi;
}
let total = prompt("Ingrese el total de la cuenta: ");
let porcentaje = prompt("Ingrese el porcentaje de la propina: ");
console.log(calcularPropina(total,porcentaje));
