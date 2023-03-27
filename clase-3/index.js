/*
//Ecma 7
console.log(Math.pow(5, 3)) //Misma forma de escribir una potencia
console.log(5 ** 3) //* es multiplicacion, ** es potencia

const nombres = ['Daniel', 'Fran', 'Lautaro', 'Lucas', 'Rodrigo']
console.log(nombres.includes('Elias')) //Devuelve V o F si existe o no un elemento

//Ecma 8
//Tambien se incluyo Async-Await
const libro = {
    nombre: "Cinco semanas en globo",
    editorial: "Hetzel",
    autor: "Julio Verne",
    año: 2017,
    precio: 1200,
    stock: 10
}

console.log(Object.keys(libro)) //Devuelve las claves de mi objeto
console.log(Object.values(libro)) //Devuelve los valores de las claves de mi objeto
console.log(Object.values(libro).includes('Julio Verne')) //Puedo implementar metodos de arrays una vez hecha la conversion
console.log(Object.entries(libro)) //Devuelve las keys y sus respectivos valores

//Ecma 9
//Tambien incluye .finally()

const libro = {
    nombre: "Cinco semanas en globo",
    editorial: "Hetzel",
    autor: "Julio Verne",
    año: 2017,
    precio: 1200,
    stock: 10
}

const libro2 = { ...libro } //Copia de objetos, en caso de que se contengan propiedades complejas utilizar structuredClone()
//console.log(libro2)


function sumar(...num) { //Operador REST => Referencia a n cantidad de numeros que recibo como parametro en un array
    //const num = [5,10,20,30]

    return num.reduce((num1, num2) => num1 + num2, 0)
}

console.log(sumar(5.5, 10.6, 5, 20, 30))

//Ecma 10

const nombre = " Francisco "
console.log(nombre)
console.log(nombre.trim()) //Eliminar espacios en blanco

const facturas = [2000, [3000, [5000, [10000]]], 1500] //flat(num) elimina arrays internos a num nivel
console.log(facturas.flat(5)) //.reduce((num1, num2) => num1 + num2, 0))

//import {} from ''
const user = true
if(user ){  //Login valido
    const config = import('ruta') //Esto si mi usuario se loguea
} else {
    //Enviar mensaje de login invalido
}*/

//Ecma 11

const sueldos = [2000, undefined, 1500, 5000, 10000, null, 200000, 5000]
//Si numero es null o undefined, le asigno 0
console.log(sueldos.map(numero => numero = numero ?? 0).reduce((num1, num2) => num1 + num2, 0)) //?? operador nullish


class ProductManager {
    constructor() {
        this.products = []
    }
    //Metodos solicitados
}

//Optativo para no repetir propiedades
class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }

}

const product1 = new Product("", "", "", "", "", "")
const product2 = new Product("", "", "", "", "", "")
const product3 = new Product("", "", "", "", "", "")

const productManager = new ProductManager()

//Esto debe hacerse como un metodo de la clase ProductManager
productManager.products.push(product1)
productManager.products.push(product2)
productManager.products.push(product3)
