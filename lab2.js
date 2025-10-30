//! Ejercicio 1: Calculadora de propinas
const prompt = require("prompt-sync")();

console.log("Ejercicio 1: Calculadora de propinas");
function calcularPropina(total, porcentaje){
    propi = total-(total*porcentaje)/100;
    return propi;
}
let total = prompt("Ingrese el total de la cuenta: ");
let porcentaje = prompt("Ingrese el porcentaje de la propina: ");
console.log(calcularPropina(total,porcentaje));

//! Ejercicio 2: Validar contraseña
console.log("Ejercicio 2: Validar contraseña");
function validarContrasena(contra){
    if(contra.length >=8 & /\d/.test(contra) & contra !== contra.toLowerCase()){
       return true;     
    }
    return false;     
}
prompt("Ingrese un usuario: ");
let contra = prompt("Ingrese una contraseña: ");
console.log(validarContrasena(contra));

//! Ejercicio 3: Buscar Producto inventario
console.log("Ejercicio 3: Buscar Producto inventario");
function buscarProducto(produ, inventario){
    for(let i=0; i < inventario.length; i++){
        if(produ.toLowerCase() === inventario[i].nombre.toLowerCase()){
            return "Producto existe";          
        }
    }
    return null;
}
const inventario = [{ nombre: "Camisa", precio: 20 },
{ nombre: "Zapatos", precio: 50 },
{ nombre: "Bolsos", precio: 40 }
]
let produ = prompt("Ingrese producto a buscar: ");
console.log(buscarProducto(produ, inventario));