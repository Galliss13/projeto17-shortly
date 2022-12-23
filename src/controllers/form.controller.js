import connection from "../database/database.js";
import bcrypt from "bcrypt";
import {v4 as uuidV4} from "uuid"

export async function postSignup(req, res) {
    const {name, email, password} = req.body
    const passwordHash =  bcrypt.hashSync(password, 10)
    try {
        await connection.query('INSERT INTO users (name, email, password, "linksCount") VALUES ($1, $2, $3, 0)', [name, email, passwordHash])

        res.sendStatus(201)
    }catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export async function postLogin(req, res) {
    const {password} = req.body
    const {user} = res.locals    
    try {
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) return res.sendStatus(401)

        const token = uuidV4()

        await connection.query('INSERT INTO sessions ("userId", token) VALUES ($1, $2)', [user.id, token])

        return res.status(200).send(token)
    }catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
}