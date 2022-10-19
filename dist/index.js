"use strict";
/*const express = require('express')
const dotenv = require('dotenv')*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 4000;
app.get('/', (req, res) => {
    res.send('Express server');
});
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
