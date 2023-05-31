import local from 'passport-local' //Importo la estrategia a utilizar
import passport from 'passport' //Importo el core de passport

import { createHash, validatePassword } from '../utils/bcrypt.js'

const LocalStrategy = local.Strategy //Defino mi estrategia

const initializePassport = () => {
    //Defino la aplicacion de mi estrategia
    //Registro de usuarios
    passport.use('register', new LocalStrategy(
        { passReqToCallback: true, usernameField: 'email' }, async (req, username, password, done) => {
            const { first_name, last_name, email, age, gender } = req.body
            try {
                const user = await User.findOne({ email: email }) //Busco un usuario con el mail ingresado

                if (user) {
                    return done(null, false) //Usuario ya registrado, false no se creo ningun usuario
                }
                //Usuario no existe
                const passwordHash = createHash(password)
                const userCreated = User.create({
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    age: age,
                    gender: gender,
                    password: passwordHash
                })
                console.log(userCreated)
                return done(null, userCreated)
            } catch (error) {
                return done(error)
            }

        }

    ))

    passport.use('login', new LocalStrategy(


    ))

}
