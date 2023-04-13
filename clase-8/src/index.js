import express from 'express'
import { ProductManager } from './ProductManager.js'

//Configuracion de express
const app = express()
const PORT = 4000
app.use(express.json()) //Permite ejecutar JSON en mi app
app.use(express.urlencoded({ extended: true })) //Permite poder realizar consultas en la URL (req.query)

const productManager = new ProductManager('./productos.txt')

app.get("/product", async (req, res) => {
    const products = await productManager.getProducts()
    res.send(products)
})

app.get("/product/:id", async (req, res) => {
    const product = await productManager.getProductById(req.params.id)
    res.send(product)
})

app.post("/product", async (req, res) => {
    const { title, description, price, thumbnail, code, stock } = req.body
    await productManager.addProduct({ title, description, price, thumbnail, code, stock })
    res.send("Producto creado")
})

app.put("/product/:id", async (req, res) => {
    const id = req.params.id
    const { title, description, price, thumbnail, code, stock } = req.body

    const mensaje = await productManager.updateProduct(id, { title, description, price, thumbnail, code, stock })

    res.send(mensaje)
})

app.delete("/product/:id", async (req, res) => {
    const id = req.params.id
    const mensaje = await productManager.deleteProduct(id)
    res.send(mensaje)
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})