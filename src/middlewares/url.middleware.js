import connection from "../database/database"

export async function urlSchemaValidation(req, res, next) {

    next()
}

export async function verifyUrlExistenceById(req, res, next) {
    try {
        
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
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

