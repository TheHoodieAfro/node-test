import { Express, Request, Response } from "express";
import UserController from "../controllers/user.controller";
import validate from "../middleware/validateSchema";
import {createUserSchema} from "../schemas/user.schema"

function routes(app: Express) {
    app.post('/api/users', validate(createUserSchema), UserController.createUserHandler)
    app.post('/api/users/:id', validate(createUserSchema), UserController.updateUserHandler)
    app.post('/api/sessions', UserController.login)

    app.get('api/users/:id', UserController.getUser)
}

export default routes