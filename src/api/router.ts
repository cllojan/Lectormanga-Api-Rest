//import express from "express";
import { Response, Request} from "express"
import { Router} from 'express';
import {Home} from "./Home";

const router = Router();

router.get('/home', Home);
router.get('/uwu', (_req: Request, res: Response) => {
    res.send(`<h1>uwu</h1>`)
});

export default router;
