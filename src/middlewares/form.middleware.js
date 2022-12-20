import connection from "../database/database"
import { signupSchema } from "../schemas/formSchemas"

export function signupSchemaValidation(req, res, next) {
    const user = req.body
    const {error} = signupSchema.validate(user, {abortEarly: false})
    if (error) {
        const errors = error.details.map((detail) => detail.message)
        return res.status(422).send(errors)
    }

    const {password, confirmPassword} = user
    if (password !== confirmPassword) return res.sendStatus(422)
    next()
}

export function loginSchemaValidation(req, res, next) {
    
    next()
}

export async function verifyEmailExistence(req, res, next) {
    const {email} = req.body
    try {
        const emailUserExists = await connection.query("SELECT * FROM users WHERE email=$1",[email])
        if (emailUserExists) return res.sendStatus(409)
        next()
    } catch (err) {
        console.log(err)
        return res.sendStatus(500)
    }
}

export async function verifyEmailCompatibility(req, res, next) {
    try {
        
    } catch (err) {
        
    }

    next()
}