import joi from "joi";

export const signupSchema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().min(3).required(),
    confirmPassword: joi.string().required()
})

export const signinSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
})

//58ad3e1e-4407-48e1-9288-d1773db46170 matheus
//1c6d2ba8-761a-4490-aab8-bf21a4e3f98d sarah
//5aa3433e-4923-4439-9a92-dfbd0cf7b82c maria