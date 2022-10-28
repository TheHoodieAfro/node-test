import {object, string, TypeOf} from 'zod'

export const createUserSchema = object({
    name: string({
        required_error: 'Name is required',
    }),

    email: string({
        required_error: 'Email is required',
    }).email("Not a valid email address"),

    password: string({
        required_error: 'Password is required',
    }).min(6, 'Password too short')
})