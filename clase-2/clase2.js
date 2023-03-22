/*
//Funcion normal
function sumar1(num1, num2) {
    const resultado = num1 + num2
    return resultado
}

//Funcion anonima
const sumar2 = function (num1, num2) { return num1 + num2 }

//Funcion flecha
const sumar3 = (num1, num2) => {
    return num1 + num2
}
const sumar4 = (num1, num2) => num1 + num2

//En una funcion flecha el return es implicito si es una sola linea
console.log(sumar1(5, 10))
console.log(sumar2(5, 10))
console.log(sumar3(5, 10))
console.log(sumar4(5, 10))*/

/*const pokemon1 = new Pokemon(1, "Pika pika", "Electrico", 20, 5)
console.log(pokemon1)
pokemon1.saludar()*/

//import  Pikachu  from "./Clases.js" export default, va sin llaves
import { Pikachu } from "./Clases.js" //export, va con llaves
const pikachu1 = new Pikachu(2, "Laucha", "Electrico", 20, 5, 10)
console.log(pikachu1)
pikachu1.saludar()
pikachu1.impactrueno()