const socket = io()

//socket.emit() enviar un mensaje
//socket.on() recibir un mensaje

socket.emit("mensaje", "Hola buenos dias")

socket.emit("user", { username: "Fran", password: "1234" })
socket.on("confirmacionAcceso", info => {
    console.log(info)
    //Consultar al DOM y actualizar informacion
})

socket.on("mensaje-socket-propio", mensaje => {
    console.log(mensaje)
})