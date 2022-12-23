import { Router } from "express";

import { signupSchemaValidation, loginSchemaValidation, verifyEmailExistence, verifyEmailCompatibility } from "../middlewares/form.middleware.js";
import { postSignup, postLogin } from "../controllers/form.controller.js";

const router = Router()

router.post('/signup', signupSchemaValidation, verifyEmailExistence, postSignup)
router.post('/signin', loginSchemaValidation, verifyEmailCompatibility, postLogin)

export default router