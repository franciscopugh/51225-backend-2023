export const testLogin = (req, res, next) => {
    const { email, password } = req.body

    try {
        if (email == "dcracknell2@pcworld.com" && password == "1234") {
            req.session.login = true
            res.status(200).json({ message: "Usuario logueado" })
        } else {
            res.status(401).json({ message: "Usuario no logueado" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
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