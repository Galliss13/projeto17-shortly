import { Router } from "express";

import { getUserUrls, getUsersUrlsRanking} from "../controllers/user.controller.js";
import { verifyUserExistence } from "../middlewares/user.middleware.js";
import tokenAuthentication from "../middlewares/tokenAuthentication.middleware.js"

const router = Router()

router.get('/users/me', tokenAuthentication, verifyUserExistence, getUserUrls)
router.get('/ranking',getUsersUrlsRanking)