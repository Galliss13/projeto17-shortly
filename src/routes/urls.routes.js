import { Router } from "express";

import { postUrlShorten, getUrlById, getOpenShortUrl, deleteShortUrlById } from "../controllers/url.controller.js";
import { urlSchemaValidation, verifyShortenUrlExistenceByUrl, verifyUrlOwner } from "../middlewares/url.middleware.js";
import tokenAuthentication from "../middlewares/tokenAuthentication.middleware.js"


const router = Router()

router.post('/urls/shorten', tokenAuthentication, urlSchemaValidation, postUrlShorten)
router.get('/urls/:id', getUrlById)
router.get('/urls/open/:shortUrl',verifyShortenUrlExistenceByUrl, getOpenShortUrl)
router.delete('/urls/:id', tokenAuthentication, verifyUrlOwner, deleteShortUrlById)