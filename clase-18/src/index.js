import 'dotenv/config'
import mongoose from 'mongoose'
import orderModel from './models/order.js'

await mongoose.connect(process.env.URL_MONGODB_ATLAS)
    .then(() => console.log("BDD esta conectada"))
    .catch((error) => console.log(error))
//Filtrado //Configuracion de paginas
const resultado1 = await orderModel.paginate({ size: "small" }, { limit: 5, page: 2 })

console.log(resultado1)

/*
const resultados = await orderModel.aggregate([

    
    {
        $match: { size: "medium" } //Filtro por x propiedad
    },
    

    {
        $group: { _id: "$name", totalQuantity: { $sum: "$quantity" }, totalPrice: { $sum: "$price" } } //Agrupo las ventas de pizzas por sabor (ej: 2 ventas + 5 ventas + 5 ventas = 12 ventas totales del sabor)
    },
    {
        //1 si es menor a mayor y -1 si es mayor a menor
        $sort: { totalQuantity: -1 }
    },
    {
        $group: { _id: 1, orders: { $push: "$$ROOT" }, } //Generar un objeto que agrupe a las ordenes $$ROOT el codigo generado hasta este stage
    },
    {
        $project: {
            "_id": 0,
            orders: "$orders"
        }
    },
    {
        $merge: {
            into: "reports"
        }
    }

])

console.log(resultados)

/*
await orderModel.insertMany([
    { name: "Napolitana", size: "small", price: 2500, quantity: 2 },
    { name: "Anchoas", size: "large", price: 6000, quantity: 3 },
    { name: "Mozzarella", size: "medium", price: 2800, quantity: 2 },
    { name: "4 quesos", size: "small", price: 5500, quantity: 4 },
    { name: "Verduras", size: "medium", price: 1750, quantity: 1 },
    { name: "Jamon y morron", size: "large", price: 4000, quantity: 3 },
    { name: "Napolitana", size: "medium", price: 4000, quantity: 3 },
    { name: "Anchoas", size: "small", price: 1800, quantity: 1 },
    { name: "Mozzarella", size: "large", price: 3000, quantity: 1 },
    { name: "Fugazzeta", size: "medium", price: 7500, quantity: 5 },
    { name: "4 quesos", size: "medium", price: 6000, quantity: 3 },
    { name: "Verduras", size: "small", price: 1500, quantity: 1 }
])*/
