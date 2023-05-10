import { Schema, model } from "mongoose";

const userSchema = new Schema({ //Defino las propiedades de mi modelo user
    nombre: String,
    apellido: String,
    email: { //Abro llaves por que defino mas de una propiedad
        type: String,
        unique: true //El atributo email es unico en mi BDD
    },
    password: String
})

export const userModel = model("users", userSchema)