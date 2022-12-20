import connection from "../database/database.js"

export default async function tokenAuthentication(req, res, next) {
    const authorization = req.headers
    const token = authorization?.replace('Bearer ', '')
    
    if(!token) return res.sendStatus(401)

    try {
        const session = await connection.query('SELECT * FROM sessions WHERE token=$1', [token])
        const user = await connection.query('SELECT * FROM users WHERE id=$1', [session.userId])
        if (!session || !user) return res.sendStatus(401)
        res.locals.user = user
        next()
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }

}