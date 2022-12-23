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
        res.status(200).send(url.rows[0])
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }}

export async function getOpenShortUrl(req, res) {
    const {url, userId} = res.locals.urlObject
    try {
        await connection.query('UPDATE urls SET "visitCount" = "visitCount" + 1 WHERE url=$1', [url])
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
        if (!url) return res.sendStatus(404)
        if (user.id !== url.userId) return res.sendStatus(401)

        await connection.query('DELETE FROM urls WHERE id=$1', [id])
        await connection.query('UPDATE users SET "linksCount" = "linksCount" - 1 WHERE id=$1', [user.id])
        return res.sendStatus(204)
        
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }}


