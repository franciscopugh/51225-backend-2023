import express from 'express'
import productRouter from './routes/product.routes.js'
import multer from 'multer'
import { __dirname, __filename } from './path.js'
import { engine } from 'express-handlebars'
import * as path from 'path'
import { Server } from 'socket.io'

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

const server = app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})

app.engine('handlebars', engine()) //Voy a trabajar con handlebars
app.set('view engine', 'handlebars') //Mis vistas son de hbs
app.set('views', path.resolve(__dirname, './views')) //src/views path.resolve lo que hace es una concatenacion

//Middleware
app.use(express.json()) //Permite ejecutar JSON en mi app
app.use(express.urlencoded({ extended: true })) //Permite poder realizar consultas en la URL (req.query)
const upload = (multer({ storage: storage })) //Instancio un objeto con la configuracion de multer presentada

//ServerIO

const io = new Server(server)

io.on('connection', (socket) => { //Cuando se establezca la conexion, ejecutar la siguiente funcion
    console.log("Cliente conectado")

    socket.on('mensaje', info => {
        console.log(info)
    })

    socket.on('user', info => {
        console.log(info)
        //Consulto si es un user valido
        socket.emit("confirmacionAcceso", "Acceso concedido")

    })
    //Mensaje que se envia a todos los clientes conectados a otros sockets pero no al mio
    socket.broadcast.emit("mensaje-socket-propio", "Datos jugadores")
})

//Routes
app.use('/product', productRouter)
app.use('/', express.static(__dirname + '/public')) //Defino la ruta de mi carpeta publica
app.post('/upload', upload.single('product'), (req, res) => {
    //Imagenes
    console.log(req.body)
    console.log(req.file)
    res.send("Imagen subida")
})

//HBS

app.get('/', (req, res) => {
    const tutor = {
        nombre: "Luciana",
        email: "lu@lu.com",
        rol: "Tutor"
    }

    const cursos = [
        { numero: 123, nombre: "Programacion Backend", dia: "LyM", horario: "Noche" },
        { numero: 456, nombre: "React", dia: "S", horario: "Mañana" },
        { numero: 789, nombre: "Angular", dia: "MyJ", horario: "Tarde" }
    ]

    res.render('home', {//Primer parametro indico la vista a utilizar
        titulo: "51225 Backend",
        mensaje: "Hola, buenos dias",
        user: tutor,
        isTutor: tutor.rol === "Tutor", //V o F
        cursos: cursos
    })
})