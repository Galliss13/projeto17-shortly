import connection from "../database/database.js";
import { nanoid } from "nanoid";

export async function postUrlShorten(req, res) {
    const {user} = res.locals
    const {url} = req.body 
    const shortUrl = nanoid(5)
    try {
        await connection.query('INSERT INTO urls ("userId", url, "shortUrl") VALUES ($1, $2, $3)', 
        [user.id, url, shortUrl])
        await connection.query('UPDATE users SET "linksCount" = "linksCount" + 1 WHERE id=$1', [user.id])

        const createdUrl = await connection.query('SELECT * FROM urls WHERE url=$1', [url])
        await connection.query('INSERT INTO visits ("userId", "urlId") VALUES ($1, $2)', [user.id, createdUrl.rows[0].id])
        return res.sendStatus(201)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export async function getUrlById(req, res) {
    const {id} = req.params
    try {
        const url = await connection.query('SELECT * FROM urls WHERE id=$1', [id])
        if (!url.rows[0]) return res.sendStatus(404)
        delete url.rows[0].userId
        delete url.rows[0].visitCount
        delete url.rows[0].createdAt
        res.status(200).send(url.rows[0])
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export async function getOpenShortUrl(req, res) {
    const {id, userId, url} = res.locals.urlObject
    try {
        await connection.query('INSERT INTO visits ("userId", "urlId") VALUES ($1, $2)', [userId, id])
        res.redirect(url)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export async function deleteShortUrlById(req, res) {
    const {user} = res.locals
    const {id} = req.params
    try {
        const url = await connection.query('SELECT * FROM urls WHERE id=$1', [id])
        if (!url.rows[0]) return res.sendStatus(404)
        if (user.id !== url.rows[0].userId) return res.sendStatus(401)
        await connection.query('DELETE FROM visits WHERE "urlId"=$1', [id])
        await connection.query('DELETE FROM urls WHERE id=$1', [id])
        await connection.query('UPDATE users SET "linksCount" = "linksCount" - 1 WHERE id=$1', [user.id])
        return res.sendStatus(204)
        
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}


