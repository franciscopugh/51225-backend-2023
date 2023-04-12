import express from 'express'

//Configuracion de express
const app = express()
const PORT = 4000
app.use(express.json()) //Permite ejecutar JSON en mi app
app.use(express.urlencoded({ extended: true })) //Permite poder realizar consultas en la URL (req.query)


const users = [
    {
        nombre: "Francisco",
        apellido: "Pugh",
        id: 1,
        cargo: "Profesor"
    },
    {
        nombre: "Alex",
        apellido: "Terrussi",
        id: 2,
        cargo: "Tutor"
    },
    {
        nombre: "Daniel",
        apellido: "Perco",
        id: 3,
        cargo: "Tutor"
    }
]

app.get("/user", (req, res) => {
    res.send(users)
})

app.get("/user/:idUser", (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.idUser))
    res.send(user)
})

app.post("/user", (req, res) => {
    const { nombre, apellido, id, cargo } = req.body //Consulto los datos enviados por postman
    users.push({ nombre: nombre, apellido: apellido, id: id, cargo: cargo }) //Creo y guardo un nuevo objeto
    res.send("Usuario creado")
})

app.put("/user/:idUser", (req, res) => {
    const idUser = parseInt(req.params.idUser)
    const { nombre, apellido, cargo } = req.body //Consulto los datos enviados por postman

    let indice = users.findIndex(user => user.id === idUser)
    console.log(indice)
    if (indice != -1) {
        users[indice].nombre = nombre
        users[indice].apellido = apellido
        users[indice].cargo = cargo
        res.send("Usuario actualizado") //Return implicitado
    }

    res.send("Usuario no encontrado")
})

app.delete("/user/:idUser", (req, res) => {
    const indice = users.findIndex(user => user.id === parseInt(req.params.idUser))
    users.splice(indice, 1)
    res.send("Usuario eliminado")
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})