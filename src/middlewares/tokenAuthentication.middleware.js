import connection from "../database/database.js"

export default async function tokenAuthentication(req, res, next) {
    const {authorization} = req.headers
    const token = authorization?.replace('Bearer ', '')
    
    if(!token) return res.sendStatus(401)

    try {
        const session = await connection.query('SELECT * FROM sessions WHERE token=$1', [token])
        if (!session.rows[0]) return res.sendStatus(401)
        const user = await connection.query('SELECT * FROM users WHERE id=$1', [session.rows[0].userId])
        if (!user.rows[0]) return res.sendStatus(401)
        res.locals.user = user.rows[0]
        next()
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }

}