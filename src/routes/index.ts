import { Express, Request, Response } from "express";
import UserController from "../controllers/user.controller";
import validate from "../middleware/validateSchema";
import {createUserSchema} from "../schemas/user.schema"
import verifyToken from "../middleware/auth";

function routes(app: Express) {

    app.get('api/users/:id', verifyToken, UserController.getUser)

    app.post('/api/users', validate(createUserSchema), UserController.createUserHandler)
    app.post('/api/sessions', UserController.login)

    app.put('/api/users/:id', validate(createUserSchema), UserController.updateUserHandler)
}

export default routes