import joi from "joi";

export const signupSchema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().required(),
    password: joi.string().min(3).required(),
    confirmPassword: joi.string().required()
})

export const signinSchema = joi.object({
    email: joi.string().required(),
    password: joi.string().required()
})

