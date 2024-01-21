//import express from "express";

import { Router} from 'express'
import { Home } from "./Home"
import { MangaInfo } from "./MangaInfo"


const router = Router()


//Carga de los mangas del inicio de la pagina
router.get('/home', Home)

//Informacion de los mangas por el codigo
router.get('/manga/:code',MangaInfo)


export default router
