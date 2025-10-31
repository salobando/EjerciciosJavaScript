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

//! Ejercicio 4: Calcular promedio notas
console.log("Ejercicio 4: Calcular promedio notas");
function calcularPromedio(notas){
    let sum=0;
    for (let i=0; i<notas.length;i++){
        sum += notas[i];
    }
    return sum/(notas.length);
}
let notasIngre = prompt("Ingrese sus notas separadas por comas(32,25,50): ");
let notas = notasIngre.split(",").map(Number);// convierte el string en array
console.log(calcularPromedio(notas).toFixed(2));

//! Ejercicio 5: Filtrar usuarios por edad 
function filtrarUsuarios(usuarios, edadMinima){
    for(let i=0; i<usuarios.length; i++){
        if(usuarios[i].edad >= edadMinima){
            console.log("Edad > a ",edadMinima," : ",usuarios[i].edad);
        }
    }
} 
const usu=[{ nombre: "Ana", edad: 25 },{ nombre: "Sofi", edad: 32 },
    { nombre: "carlos", edad: 60 }, { nombre: "David", edad: 12 }];
let edmin = prompt("Ingrese la edad minima: ");
console.log(filtrarUsuarios(usu,edmin));


//! Ejercicio 6. Contador de palabras
function contarPalabras(texto){
    return texto.length;
}
let cadena = prompt("Ingrese una frase: ").split(" ");
console.log(contarPalabras(cadena));

//! Ejercicio 7: Simulador cajero automatico
function retirarDinero(saldo, monto){
    if(saldo>monto){
        console.log("Saldo nuevo: ", saldo-monto);        
    }else{
        console.log("Fondos Insuficientes");        
    }
}
let saldo = prompt("Ingrese saldo actual: ");
let monto = prompt("Monto a retirar: ");
console.log(retirarDinero(saldo,monto));