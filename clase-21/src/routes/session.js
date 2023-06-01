import { Router } from "express";
import passport from "passport";
import { destroySession, testLogin } from "../controllers/session.controller.js";
const routerSession = Router()


routerSession.post("/login", passport.authenticate('login'), testLogin)
routerSession.get("/logout", destroySession)

export default routerSession