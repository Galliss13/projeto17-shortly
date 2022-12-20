import connection from "../database/database.js"
import {urlSchema} from "../schemas/urlSchemas.js"

export async function urlSchemaValidation(req, res, next) {
    const url = req.body
    const {error} = urlSchema.validate(url, {abortEarly: false})
    if (error) {
        const errors = error.details.map((detail) => detail.message)
        return res.status(422).send(errors)
    }
    next()
}


export async function verifyShortenUrlExistenceByUrl(req, res, next) {
    try {
        
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }

    next()
}

export async function verifyUrlOwner (req, res, next) {
    try {
        
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }

    next()
}

