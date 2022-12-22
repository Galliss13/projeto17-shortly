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
        
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}