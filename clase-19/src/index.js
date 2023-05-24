import 'dotenv/config'
import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'


const app = express()

app.use(cookieParser(process.env.COOKIE_SECRET)) //Firmo la cookie
app.use(express.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true, //Me permite cerrar la pestaña o recargar y que la sesion siga activa
    saveUninitialized: true //Guardar la sesion aunque no contenga info
}))

//Cookies

//Crear cookie
app.get('/setCookie', (req, res) => {
    //Nombre cookie - Valor asociado a dicha cookie
    res.cookie('CookieCookie', "Id545", { maxAge: 3600000, signed: true }).send("Cookie firmada creada")

})

//Consultar cookie

app.get('/getCookie', (req, res) => {
    //Nombre cookie - Valor asociado a dicha cookie
    res.send(req.signedCookies)
})

//Eliminar cookie

app.get('/deleteCookie', (req, res) => {
    res.clearCookie('CookieCookie').send("Cookie eliminada")
})

//Sessions

app.get('/session', (req, res) => {
    if (req.session.counter) { //Consulto si en la session existe un contador
        req.session.counter++
        res.send(`Ingresaste ${req.session.counter} veces`)
    } else {
        req.session.counter = 1 //Creo el contador
        res.send(`Hola, esta es la primera vez que ingreso`)
    }
})


app.listen(4000, () => console.log("Server on port 4000"))