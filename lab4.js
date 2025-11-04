//! 1. Sistema basico de vehículos
class Vehiculo{
    constructor(marca,modelo,año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    obtenerDetalles(){
        return `El vehiculo tiene las siguientes caracteristicas:
        marca: ${this.marca} Modelo: ${this.modelo} Año:${this.año}`;
    }
}

class Coche extends Vehiculo{
    constructor(marca,modelo,año,numPuertas){
        super(marca, modelo,año)
        this.puertas= numPuertas;
    }
    info(){
        return `Numero Puertas:${this.puertas}`;        
    }
}

class Moto extends Vehiculo{
    constructor(marca,modelo,año,cilindraje){
        super(marca, modelo,año,cilindraje)
        this.cilindraje= cilindraje;
    }
    info(){
        return `Cilindraje:${this.cilindraje}`;        
    }
}

const carro1 = new Coche("Chevrolet","Silverado",2024, 4)
const moto1 = new Moto("AKT", "TT DS 200", 2020,"Alto");
console.log(carro1.obtenerDetalles()+" "+ carro1.info());
console.log(moto1.obtenerDetalles()+" "+ moto1.info());

//! 2. Sistema de empleados
class Empleado{
    constructor(nombre, edad, salarioBase){
        this.nombre = nombre;
        this.edad = edad;
        this.salario = salarioBase;
    }
    calcularSalario(){
        return this.salario;        
    }
}

class Gerente extends Empleado{
    constructor(nombre, edad, salario,bonificacion){
        super(nombre, edad,salario);
        this.bonificacion = bonificacion;
    }
    calcularSalario(){
       let total = this.salario + this.bonificacion;
       return total;       
    }
}

class Desarrollador extends Empleado{
    constructor(nombre, edad, salario, lenguaje){
        super(nombre, edad, salario);
        this.lenguaje = lenguaje;
    }
}

const gerente1 = new Gerente("David", 34,6500000, 350000);
const desarrollador1 = new Desarrollador("Alexa", 28,3400000, "Java");
console.log("Salario del gerente: "+ gerente1.calcularSalario());
console.log("Salario del desarrollador: "+ desarrollador1.calcularSalario());

//! 3. Sistema de productos electronicos
class Producto{
    constructor(nombre,precio,marca){
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
    }
    descripcion(){
        return `Detalles del producto:
        Nombre: ${this.nombre} Precio: ${this.precio} Marca:${this.marca}`;        
    }
}

class Telefono extends Producto{
    constructor(nombre,precio,marca,almacenamiento,ram){
        super(nombre,precio,marca);
        this.almacenamiento = almacenamiento;
        this.ram = ram;
    }    
    descripcion(){
        return `${super.descripcion()} Almacenamiento: ${this.almacenamiento} Ram:${this.ram}`;
    }
}
class Laptop extends Producto{
    constructor(nombre,precio,marca,procesador,pulgadas){
        super(nombre,precio,marca);
        this.procesador = procesador;
        this.pulgadas = pulgadas;
    }
    descripcion(){
        return `${super.descripcion()} Procesador: ${this.procesador} Pulgadas:${this.pulgadas}`;        
    }    
}

const tel = new Telefono("Galaxy A15",620000,"Samsung", "256GB",8);
const lapto = new Laptop("Portatil HP",1999000,"HP", "Intel Core i5",15);
console.log(tel.descripcion());
console.log(lapto.descripcion());

//! 4. Sistema de figuras geométricas
class Figura{
    constructor(color){
        this.color = color;
    }
    area(){
        return 0;
    }
}

class Rectangulo extends Figura{
    constructor(color,base,altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }
    area(){
        return this.altura*this.base;
    }
}

class Circulo extends Figura{
    constructor(color,radio){
        super(color);
        this.radio = radio;
    }
    area(){
        return Math.PI*Math.pow(this.radio,2);
    }
}

const rect = new Rectangulo("Rojo",5,8);
const circ = new Circulo("Azul",5);
console.log("Area del Rectangulo: "+rect.area());
console.log("Area del Circulo: "+circ.area());
