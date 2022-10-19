import { Request, Response, NextFunction } from "express";

interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

