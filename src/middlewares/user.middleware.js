import connection from "../database/database.js"

export async function verifyUserExistence(req, res, next) {
    try {
        
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }

    next()
}