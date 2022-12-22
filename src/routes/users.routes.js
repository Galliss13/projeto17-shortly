import { Router } from "express";

import { getUserUrls, getUsersUrlsRanking} from "../controllers/user.controller.js";
import tokenAuthentication from "../middlewares/tokenAuthentication.middleware.js"

const router = Router()

router.get('/users/me', tokenAuthentication, getUserUrls)
router.get('/ranking',getUsersUrlsRanking)