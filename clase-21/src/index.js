import 'dotenv/config'
import express from 'express'

const app = express()

app.listen(4000, () => console.log("Server on port 400"))