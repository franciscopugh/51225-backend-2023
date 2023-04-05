import crypto from 'crypto'

/*
    Proceso de encriptacion

    Algoritmo: Forma de encriptar
    Key: Valor unico
    IV: Vector de inicializacion que añade complejidad al codigo encriptado

*/
const algoritmo = 'aes-256-cbc'
const key = crypto.randomBytes(32) //32 valores distintos a 64 valores distintos con el mismo peso
const iv = crypto.randomBytes(16) //16 valores  a 32 valores

const encriptar = (password) => {
    const cipher = crypto.createCipheriv(algoritmo, Buffer.from(key), iv) //Creo mi encriptador con los datos de las constantes
    cipher.update(password) //Preparo mi objeto cipher para encriptar mi contraseña
    let encriptacion = cipher.final() //Resultado de la encriptacion
    return encriptacion.toString('hex')
}

const desencriptar = (passwordE) => {
    const decipher = crypto.createDecipheriv(algoritmo, Buffer.from(key), iv)
    decipher.update(Buffer.from(passwordE, 'hex')) //Pasarlo de string a buffer
    let desencriptado = decipher.final()
    return desencriptado.toString()

}

const passwordEncriptado = encriptar('coderhouse')
console.log(passwordEncriptado)
const contraseñaBDD = desencriptar(passwordEncriptado)
if (contraseñaBDD == "coderhouse") {
    console.log("Ingreso")
} else {
    console.log("No ingreso")
}
