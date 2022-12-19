import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import formRoutes from "./routes/form.routes.js"
import urlRoutes from "./routes/urls.routes.js"
import userRoutes from "./routes/users.routes.js"

const app = express()
app.use(cors())
app.use(express.json())

app.use(formRoutes)
app.use(urlRoutes)
app.use(userRoutes)

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`app running in port ${port}`))