import express from 'express'
import mongoose from 'mongoose'
import { userModel } from './models/user.js'
const app = express()

mongoose.connect("mongodb+srv://franciscopugh01:<password>@cluster0.uwq84bc.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("DB is connected"))
    .catch((error) => console.log("Errror en MongoDB Atlas :", error))


app.listen(4000, () => console.log("Server on port 4000"))