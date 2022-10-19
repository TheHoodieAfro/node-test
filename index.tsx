/*const express = require('express')
const dotenv = require('dotenv')*/

import express, {Express, Request, Response} from "express";
import dotenv from 'dotenv';

dotenv.config()

const app: Express = express()
const port: Number = Number(process.env.PORT) || 4000;

app.get('/', (req: Request, res: Response) => {
    res.send('Express server')
})

app.listen(port, () => {
    console.log('Server is running on port '+ port)
})