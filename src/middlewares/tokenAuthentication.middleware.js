import connection from "../database/database.js"

export default async function tokenAuthentication(req, res, next) {
    try {
        
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }

    next()
}