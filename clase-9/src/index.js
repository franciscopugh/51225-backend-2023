import express from 'express'
import productRouter from './routes/product.routes.js'
import multer from 'multer'
import { __dirname, __filename } from './path.js'


//Configuraciones
const app = express()
const PORT = 4000
const storage = multer.diskStorage({
    destination: (req, file, cb) => { //Destino de mis imagenes cargadas
        cb(null, 'src/public/img')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
    }
})

//Middleware
app.use(express.json()) //Permite ejecutar JSON en mi app
app.use(express.urlencoded({ extended: true })) //Permite poder realizar consultas en la URL (req.query)
const upload = (multer({ storage: storage })) //Instancio un objeto con la configuracion de multer presentada

//Routes
app.use('/product', productRouter)
app.use('/static', express.static(__dirname + '/public')) //Defino la ruta de mi carpeta publica
app.post('/upload', upload.single('product'), (req, res) => {
    //Imagenes
    console.log(req.body)
    console.log(req.file)
    res.send("Imagen subida")
})


app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})