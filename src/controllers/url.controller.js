import connection from "../database/database.js";
import { nanoid } from "nanoid";

export async function postUrlShorten(req, res) {
    const {user} = res.locals
    const {url} = req.body 
    const shortUrl = nanoid(5)
    try {
        await connection.query('INSERT INTO urls ("userId", url, "shortUrl", "visitCount") VALUES ($1, $2, $3, 0)', 
        [user.id, url, shortUrl])
        return res.sendStatus(201)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export async function getUrlById(req, res) {
    try {
        
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export async function getOpenShortUrl(req, res) {
    try {
        
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}



export async function deleteShortUrlById(req, res) {
    try {
        
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}


