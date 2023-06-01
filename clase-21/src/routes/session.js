import { Router } from "express";
import { destroySession, getSession, testLogin } from "../controllers/session.controller.js";
const routerSession = Router()

routerSession.get("/", getSession)
routerSession.post("/testLogin", testLogin)
routerSession.get("/logout", destroySession)

export default routerSession