//const fs = require('fs')
//import * as fs from 'fs'

//FS Sincronico

//const RUTA_ARCHIVO = './info.txt'
/*
if (fs.existsSync(RUTA_ARCHIVO)) { //Existe este archivo de texto?, similar a un .some() de los arrays
    let contenido = fs.readFileSync(RUTA_ARCHIVO, 'utf-8') //READ
    console.log(contenido)
    fs.appendFileSync(RUTA_ARCHIVO, `\nVivo en Trelew, Chubut \nEnseño programacion con Js`) //UPDATE
    fs.unlinkSync(RUTA_ARCHIVO) //DELETE
} else {
    //Escribir un archivo de forma sincronica
    //PATH          INFO
    fs.writeFileSync(RUTA_ARCHIVO, "") //CREATE
}

//FS CALLBACKS

fs.writeFile(RUTA_ARCHIVO, "", (error) => {
    if (error) {
        return "Error en creacion de archivo"
    }
    fs.readFile(RUTA_ARCHIVO, 'utf-8', (error) => {
        if (error) {
            return "Error en lectura de archivo"
        }
        fs.appendFile(RUTA_ARCHIVO, `\nVivo en Trelew, Chubut \nEnseño programacion con Js`, (error) => {
            if (error) {
                return "Error en Escritura de archivo"
            }
            fs.unlink(RUTA_ARCHIVO, (error) => {
                if (error) {
                    return "Error en eliminar archivo"
                }
            })
        })
    })
})
*/
import { promises as fs } from 'fs' //Importo solamente promesas

const RUTA_ARCHIVO = './info.txt'

const productos = []

const prod1 = { nombre: "Arroz" }

const consultasTXT = async (ruta) => {
    try {
        await fs.writeFile(ruta, JSON.stringify(productos))
        const contenido = await fs.readFile(ruta, 'utf-8') //Consulto el array

        //TODAS LAS MODIFICACIONES, AGREGACIONES Y ELIMINACIONES
        const aux = JSON.parse(contenido)
        aux.push(prod1)
        //Siempre voy a tener que reemplazar
        await fs.writeFile(ruta, JSON.stringify(aux))
        aux.push(prod1)
        await fs.writeFile(ruta, JSON.stringify(aux))
        //await fs.unlink(ruta)

    } catch (error) {
        return error
    }
}

consultasTXT(RUTA_ARCHIVO)