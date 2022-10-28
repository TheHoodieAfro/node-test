import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

const validate = (Schema: AnyZodObject) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            Schema.parse(req.body)
            next();
        }catch(e: any) {
            return res.status(400).send(e.errors)
        }
    }
}

export default validate;