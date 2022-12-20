import connection from "../database/database"

export default async function tokenAuthentication(req, res, next) {
    try {
        
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }

    next()
}