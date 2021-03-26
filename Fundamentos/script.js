// Break and Continue
// Break Rompe El Ciclo, break se salta la itereacion
// const numeros = [1,2,3,4,5,6,7,8,9,0];

// for (let i = 0; i <numeros.length ; i++){
//     if(i === 5 ){
//         break;
//     }
//     console.log(numeros[i]);
// }


// for (let i = 0; i <numeros.length ; i++){
//     if(i === 5 ){
//         continue;
//     }
//     console.log(numeros[i]);
// }

//<----------------------- Destructuracion -------------------------------->

const numeros = [1,2,3];

// // sin destructuracion
// let uno = numeros[0],
//     dos = numeros[1],
//     tres= numeros[2];

//     console.log(uno,dos,tres)

// //con destructuracion
// const [one,two,three] = numeros;
// console.log(one,two,three);

// const persona = {
//     nombre:"jhona",
//     apellido:"Soto",
//     edad:35
// }

// let {nombre,apellido,edad} = persona;
// console.log(nombre,apellido,edad)

// <-----------------Objetos Literales---------------->

// let nombre = "Perris",
//     edad = 10;

// const dog = {
//     nombre,
//     edad,
//     raza: 'Callejero',
//     ladrar(){
//         console.log('WAu WAU')
//     }
// }

// console.log(dog)
// dog.ladrar()

// <----------------------Arrow Functions -------------------->
// // funcion exprsada 
// const saludo = (nombre) => console.log(`Hola ${nombre}`);
// saludo('jhona');

// const sumar = (a,b) => a + b;

// console.log(sumar(1,2));
// // metodos en un objeto literal no crear arrow fuction por el metodo
// // this


// Poo
// <---------------------------- Prototipos ------------------>
/* clases - modelo a seguir
    Objetos - es una instancia de una clase
        atributos.- es una caracteristica o propiedad
        objeto(son variables dentro de un objeto)
        metodos: son las acciones que un objeto puede realiar
        (son funciones dentro de un objeto)
*/ 

// const animal = {
//     nombre:"Cachito",
//     sonar(){
//         console.log('Hago sonidos por que estoy vivo');
//     }
// }

// const animal2 = {
//     nombre:"Cacucho",
//     sonar(){
//         console.log('Hago sonidos por que estoy vivo');
//     }
// }


// console.log(animal)
// console.log(animal2)


// funcion constructura

/*
    Version 1.0
function Animal (nombre, genero){
    // atributos
    this.nombre = nombre;
    this.genero = genero;
    //metodos
    this.sonar = function(){
        console.log('Hago sonidos por que estoy vivo');
    }

    this.saludar = function(){
        console.log(`Hola me llamo ${this.nombre}`)
    }
}
*/
//Funcion contrstuctura donde asignamos los metodos al prototipo
function Animal (nombre, genero){
    // atributos
    this.nombre = nombre;
    this.genero = genero;
}
//metodos agregados al prototipo de la funcion constructura

Animal.prototype.sonar = function(){
    console.log('Hago sonidos por que estoy vivo');
}

Animal.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`)
}

const snoopy = new Animal('snoopy','machin'),
      lolaBunny = new Animal('lolas','femenino')

console.log(snoopy)
console.log(lolaBunny)

snoopy.saludar();
snoopy.saludar();