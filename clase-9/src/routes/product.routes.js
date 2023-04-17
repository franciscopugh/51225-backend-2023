import { Router } from "express";
import { ProductManager } from "../ProductManager.js";

const productManager = new ProductManager('./productos.txt')

const productRouter = Router() //productRouter voy a definir mis rutas

productRouter.get("/", async (req, res) => {
    const products = await productManager.getProducts()
    res.send(products)
})

productRouter.get("/:id", async (req, res) => {
    const product = await productManager.getProductById(req.params.id)
    res.send(product)
})

productRouter.post("/", async (req, res) => {
    const { title, description, price, thumbnail, code, stock } = req.body
    await productManager.addProduct({ title, description, price, thumbnail, code, stock })
    res.send("Producto creado")
})

productRouter.put("/:id", async (req, res) => {
    const id = req.params.id
    const { title, description, price, thumbnail, code, stock } = req.body

    const mensaje = await productManager.updateProduct(id, { title, description, price, thumbnail, code, stock })

    res.send(mensaje)
})

productRouter.delete("/:id", async (req, res) => {
    const id = req.params.id
    const mensaje = await productManager.deleteProduct(id)
    res.send(mensaje)
})

export default productRouter