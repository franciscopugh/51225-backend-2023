import 'dotenv/config'
import express from 'express'
import sequelize from './db/db.js'
import './models/User.js'
import './models/Producto.js'
import './models/Compra.js'

const app = express

await sequelize.sync({ force: true }).then(() => {
    console.log("BDD conectada")
})

app.listen(4000, () => console.log("Server on port 4000"))

