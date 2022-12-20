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

export async function verifyUrlExistenceById(req, res, next) {
    const {id} = req.params
    try {
        const url = await connection.query('SELECT * FROM urls WHERE id=$1', [id])
        if (!url) return res.sendStatus(404)
        next()
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }

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

