export const testLogin = (req, res, next) => {

    try {
        if (!req.user) {
            return res.status(401).send({ status: "error", error: "Usuario invalido" })
        }
        //Genero la sesion de mi usuario
        req.session.user = {
            email: req.user.email,
            first_name: req.user.first_name
        }

        res.status(200).send({ status: "success", payload: req.user })

    } catch (error) {
        res.status(500).send({ status: "Error", error: error.message })
    }

    /*const { email, password } = req.body

    try {
        if (email == "dcracknell2@pcworld.com" && password == "1234") {
            req.session.login = true
            res.status(200).json({ message: "Usuario logueado" })
        } else {
            res.status(401).json({ message: "Usuario no logueado" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }*/
}

export const destroySession = (req, res, next) => {
    if (req.session.login) {
        req.session.destroy(() => {
            res.status(200).json({ message: "Session destruida" })
        })
    }
}

export const getSession = (req, res, next) => {
    if (req.session.login) {
        res.status(200).json({ message: "Session activa" })
    } else {
        res.status(401).json({ message: "Session no activa" })
    }
}