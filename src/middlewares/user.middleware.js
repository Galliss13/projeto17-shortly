import connection from "../database/database"

export async function verifyUserExistence(req, res, next) {
    try {
        
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }

    next()
}