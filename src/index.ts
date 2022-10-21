import express, {Express, Request, Response} from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import debig from 'debug'
import debug from "debug";

dotenv.config()

const app: Express = express()
const port: Number = Number(process.env.PORT) || 4000;
const debuglog: debug.IDebugger = debug('app')

app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.send('Express server')
})

app.listen(port, () => {
    debuglog('Application running')
    console.log('Server is running on port '+ port)
})