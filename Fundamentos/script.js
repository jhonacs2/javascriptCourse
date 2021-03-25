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

let nombre = "Perris",
    edad = 10;

const dog = {
    nombre,
    edad,
    raza: 'Callejero',
    ladrar(){
        console.log('WAu WAU')
    }
}

console.log(dog)
dog.ladrar()
