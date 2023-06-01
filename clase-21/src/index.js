import 'dotenv/config'
import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import MongoStore from 'connect-mongo'
import routerSession from './routes/session.js'
import userRouter from './routes/users.js'
import passport from 'passport'
import initializePassport from './config/passport.js'
import { engine } from 'express-handlebars'
import mongoose from 'mongoose'

const app = express()

app.use(cookieParser(process.env.SIGNED_COOKIE))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URL,
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
        ttl: 15 //Medido en segundos
    }),
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))

await mongoose.connect(process.env.MONGODB_URL).then(() => console.log("MongoDB conectado"))

//Config passport
initializePassport()
app.use(passport.initialize())
app.use(passport.session())

app.use('/session', routerSession)
app.use('/user', userRouter)


app.listen(4000, () => console.log("Server on port 4000"))