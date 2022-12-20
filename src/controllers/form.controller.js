import connection from "../database/database";
import bcrypt from "bcrypt"

export async function postSignup(req, res) {
    const {name, email, password} = req.body
    const passwordHash =  bcrypt.hashSync(password, 10)
    try {
        await connection.query("INSERT INTO users (name, email, password, linksCount) VALUES ($1, $2, $3, 0)", [name, email, passwordHash])
        res.sendStatus(201)
    }catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export async function postLogin(req, res) {
    try {

    }catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
}