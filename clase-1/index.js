/*var nombre1 = "Francisco Pugh" //Variable hace referencia a un lugar en memoria
let nombre2 = { nombre: "Francisco", apellido: "Pugh" }

let nombre3 = { ...nombre2 } //... pierdo la referencia a memoria
nombre3.nombre = "Mario"
console.log(nombre2)
console.log(nombre3)
//0x0800 -> { nombre: "Francisco", apellido: "Pugh" }
*/
const user1 = {
    nombre: "Francisco",
    apellido: "Pugh",
    mascotas: [
        { nombre: "Copito de nieve", raza: "Persa" },
        { nombre: "Rodolfo", raza: "Siberiano" }
    ]
}

const user2 = structuredClone(user1)
//user2 = null //Perder la referencia a memoria
user2.mascotas[0] = null
user2.nombre = "Pepe"
console.log(user1)
console.log(user2)

/*
    Tipos de datos simples
        String
        Number
        Boolean
        Null
        Undefined

    Tipos de datos complejos
        Objetos
        Funciones
        Array

*/
