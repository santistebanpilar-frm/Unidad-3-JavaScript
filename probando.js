let a = 10;
let b = 3;

console.log("suma",a+b);
console.log("resta ", a-b);
console.log("multiplacion ", a*b);

let edad = 15;
let sms = (edad >= 18 ) ? "Puede votar" : "Es menor de edad";
console.log(sms);

let nota = 7;
if (nota >= 9 ) {
    console.log("Excelente");
}else if (nota >=6 ){
    console.log("Aprobado");
} else {
    console.log("desaprobado")
}

function calcularArea(ancho, alto){
    const area = ancho * alto;
    return area;
}

console.log(calcularArea(5,3));

let persona = {
    nombre: "ana",
    edad: 23,
    saludar: function(){
        console.log("Hola soy "+ this.nombre);
    }
}

console.log(persona.nombre);
persona.saludar();

class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    Saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }      
    
}
 let p1= new Persona("louis",34);
 p1.Saludar();
