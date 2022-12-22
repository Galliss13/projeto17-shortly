import connection from "../database/database.js";

export async function getUserUrls(req, res) {
    const {user} = res.locals
    delete user.email
    delete user.password
    try {
        const urls = await connection.query('SELECT (id, "shortUrl", url, visitCount) FROM urls WHERE "userId"=$1', [user.id])
        const userMe = {
            ...user,
            shortenedUrls: [
                ...urls
            ]
        }
        res.status(200).send(userMe)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export async function getUsersUrlsRanking(req, res) {
    try {
        const ranking = await connection.query('SELECT (users.id, users.name, users."linksCount", COUNT(visits."userId") FROM users JOIN urls ON users.id=visits."userId" GROUP BY users.id ORDER BY COUNT(visits."userId") ASC LIMIT 10')
        res.status(200).send(ranking)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}