import { Request, Response } from "express";
import { createUser } from "../services/user.service";
import debug from "debug";
import bcrypt from "bcrypt";

const debuglog: debug.IDebugger = debug('app')

export async function createUserHandler(req: Request, res: Response) {
    try {
        debuglog('********************************')
        debuglog(req)
        req.body.password = await bcrypt.hash(req.body.password, 10)

        const user = await createUser(req.body)

        return res.send(user)
    } catch (error: any) {
        debuglog(error)

        return res.status(409).send(error.message)
    }
}