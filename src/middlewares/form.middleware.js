import connection from "../database/database"
import { signupSchema } from "../schemas/formSchemas"

export function signupSchemaValidation(req, res, next) {
    const user = req.body
    const {error} = signupSchema.validate(user, {abortEarly: false})
    if (error) {
        const errors = error.details.map((detail) => detail.message)
        return res.status(422).send(errors)
    }
    next()
}

export function loginSchemaValidation(req, res, next) {

    next()
}

export async function verifyEmailExistence(req, res, next) {
    try {
        
    } catch (err) {
        
    }

    next()
}

export async function verifyEmailCompatibility(req, res, next) {
    try {
        
    } catch (err) {
        
    }

    next()
}