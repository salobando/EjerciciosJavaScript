//! 1) Prestamo de Libros
function Libro(titulo, autor){
    this.titulo = titulo,
    this.autor = autor,
    this.prestado = false,
    this.prestar = function(){
        if(!this.prestado){
            this.prestado=true;
            return `"${this.titulo}" esta disponible.`;             
        }else{
            return `Error: "${this.titulo}" ya esta prestado.`;
        }
    }
}
const libro1 = new Libro("Akelarre", "Mario Mendoza");
console.log(libro1.prestar());// esta disponible
console.log(libro1.prestar());// error ya esta prestado

//! 2) Lista de compras
function ListaCompras(){
    this.productos=[];
    this.agregar = function(){
        this.productos[0]= "1. Tomates";
        this.productos[1]= "2. Cebolla";
        this.productos[2]= "3. Platanos";
        this.productos[3]= "4. Espinaca";
    }
    this.mostrar = function(){
        for(let i=0; i<this.productos.length; i++){
            console.log(this.productos[i]);            
        }
    }
}
const lista1 = new ListaCompras();
lista1.agregar();
console.log(lista1.mostrar());

//! 3) Reproductor de Musica
function Reproductor(){
    this.estado = "detenido";
    this.play = function(){
        if(this.estado==="detenido" || this.estado==="pausado"){
            this.estado = "reproduciendo";
            console.log("Ya se está reproduciendo música.");            
        }
    }
    this.pausar = function(){
        if(this.estado==="reproduciendo"){
            this.estado = "pausado";
            console.log("Música pausada.");            
        }else{
            console.log("No hay música reproduciéndose.");            
        }
    }
    this.detener = function(){
        this.estado = "detenido";
        console.log("Música detenida.");                   
    }
}
const prueba = new Reproductor();
console.log(prueba.play());
console.log(prueba.pausar());
console.log(prueba.detener());

//! 4) Carrito de Compras con Descuentos 
function Carrito(){
    this.prodcts = [];
    this.total = 0;
    this.agregarProducto = function(nombre, precio){
        this.prodcts[0] = nombre;
        this.total += precio;
    }
    this.calcularDescuento = function(){
        if(this.total > 100){
            this.descuento = this.total - (this.total*0.10);
            return `Total con descuento: "${this.descuento}"`;            
        }else if(this.total > 50 & this.total <= 100){
            this.descuento = this.total - (this.total*0.05);
            return `Total con descuento: "${this.descuento}"`;           
        }else{
            return `Total: "${this.total}"`;             
        }
    }
}
const compra = new Carrito();
const prompt = require("prompt-sync")();
let nombre = prompt("Ingrese el Producto: ");
let precio = prompt("Ingrese el precio: ");
compra.agregarProducto(nombre,precio);
console.log(compra.calcularDescuento());