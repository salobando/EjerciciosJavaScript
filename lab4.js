//! 1. Sistema basico de vehículos
class Vehiculo{
    constructor(marca,modelo,año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    obtenerDetalles(){
    console.log(`El vehiculo tiene las siguientes caracteristicas:
        marca: ${this.marca} Modelo: ${this.modelo} Año:${this.año}`);
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

