import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    let token: string = req.body.token || req.headers.authorization

    if(!token) {

        res.status(403).send('forbidden')

    }

    try {
        token = token.substring(7, token.length)
        const tokenSecret = process.env.TOKENSECRET || ""
        const decoded = jwt.verify(token, tokenSecret)
        res.locals.user = decoded
        next()
    } catch (e: any) {

        return res.status(403).send('Invalid Token lil bitch')
        
    }
}

export default verifyToken