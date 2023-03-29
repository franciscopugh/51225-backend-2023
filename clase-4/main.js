/*const boton = document.getElementById('boton1')
                        //Callback
boton.addEventListener(() => {

})

const numeros = [4,5,7,9]

numeros.map((num) => {

})

const consultarBDD = (confirmacion) => {
    return new Promise((resolve, reject) => {
        if (confirmacion) {
            resolve("Accediste a la bdd del cliente") //Return de correcto
        }
        reject("Acceso denegado") //Return con error

    })

}

console.log(consultarBDD(true))

//Dirreccion
setInterval(() => {
    fetch("https://criptoya.com/api/dolar")
        .then(response => response.json()) //Cuando esten listos los valores
        .then(({ solidario, mep, ccl, blue }) => {
            console.log(solidario, mep, ccl, blue)
        })
        .catch(error => console.log(error))
}, 6000)*/

const API_KEY = "bfd1b980aa5416c251b43fb2f1ba6c22"

const consultarCoordenadas = async (ciudad, provincia, pais) => {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${provincia},${pais}&limit=1&appid=${API_KEY}`)
    const datos = await response.json()
    return datos[0]

}

const consultarClima = async (ciudad, provincia, pais) => {
    const { lat, lon } = await consultarCoordenadas(ciudad, provincia, pais)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    const clima = await response.json()
    console.log(clima)

}

consultarClima("Londres", "Catamarca", "Ar")
